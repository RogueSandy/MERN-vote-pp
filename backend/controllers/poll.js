const model = require('../models')

exports.showPolls = async (req, res, next) => {
    try {
        const poll = await model.Polls.find().populate('user', ['username', 'id'])

        res.status(200).json(poll)
    } catch (err) {
        err.status= 400
        next(err)
    }
}

exports.userPolls = async (req, res, next) => {
    try {
        const { id } = req.decoded
        const user = await model.User.findById(id).populate('polls')

        res.status(200).json(user.polls)
    } catch (err) {
        err.status = 400

        next(err)
    }
}

exports.getPoll = async (req, res, next) => {
    try {
        const {id} = req.params
        const poll = await model.Polls.findById(id).populate('user', ['username', 'id'])

        if(!poll) throw new Error('NO poll Found')

        res.status(200).json(poll)

    } catch (err) {
        err.status = 400

        next(err)
    }
}

exports.deletePoll = async (req, res, next) => {
    try {
        const { id: pollId } = req.params
        const { id: userId } = req.decoded

        const poll = await model.Polls.findById(pollId)
        // console.log(poll)
        if(!poll) throw new Error('No poll Found')
        if(poll.user.toString() !== userId) {
            throw new Error('Unauthosised access')
        }

        await poll.deleteOne()
        res.status(202).json(poll)
    } catch (err) {
        err.status = 400
        next(err)
    }
}

exports.createPoll = async (req, res, next) => {
    try {
        const { id } = req.decoded
        // console.log(req.decoded)
        const user = await model.User.findById(id)
        // console.log(user)

        const { question, options } = req.body
        const poll = await model.Polls.create({
            question,
            user,
            options: options.map(option => ({option, votes: 0})) 
        })

        user.polls.push(poll._id)
        user.save()

        res.status(201).json(poll)
    } catch (err) {
        err.status= 400
        
        next(err)
    }
}

exports.makeVote = async (req, res, next) => {
    try {
        const { id: pollId } = req.params
        const { id: userId } = req.decoded
        const { answer } = req.body

        if( answer ){
            const poll = await model.Polls.findById(pollId)
            // console.log(poll)
            if(!poll){
                throw new Error('No poll found')
            }

            const vote = poll.options.map(option => {
                if (option.option === answer) {
                    return {
                        option: option.option,
                        _id: option._id,
                        votes: option.votes + 1
                    }
                } else {
                    return option
                }
            })

            if(poll.voted.filter(user => user.toString() === userId).length <= 0) {
                poll.voted.push(userId)
                poll.options = vote
                await poll.save()

                res.status(202).json(poll)
            } else {
                throw new Error('Already voted')
            }

        } else {
            throw new Error("No answer provided")
        }
    } catch (err) {
        err.status = 400
        // console.log(err)
        next(err)
    }
}