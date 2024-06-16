const jwt = require('jsonwebtoken')

const model = require('../models')

exports.register = async (req, res, next) => {
    try {
        const user = await model.User.create(req.body)
        const {id, username} = user

        const token = jwt.sign({id, username}, process.env.SECRET)

        res.status(201).json({id, username, token})
    } catch (err) {
        if(err.code === 11000) {
            err.message = 'Username already exists'
        }

        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await model.User.findOne({username: req.body.username})
        if(!user){
            return res.status(200).json({error: "Invalid Username/Password"})
        }
        const {id, username} = user
        const valid = await user.comparePassword(req.body.password)

        const token = jwt.sign({id, username}, process.env.SECRET)

        if(valid) {
            res.status(200).json({ id, username, token })
        } else {
            // throw new Error('Invalid Username/Password')
            res.status(200).json({error: "Invalid Username/Password"})
        }
    } catch (err) {
        err.message = "Invalid Username/Password"

        next(err)
    }
}