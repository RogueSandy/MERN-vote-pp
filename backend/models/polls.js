const mongoose = require('mongoose')

const optionsSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number,
        default: 0
    }
})

const pollsSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    question: String,
    options: [optionsSchema],
    voted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, { timestamps: true })

module.exports = mongoose.model('Poll', pollsSchema)