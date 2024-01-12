const { Schema, model } = require('mongoose')

const jokes = new Schema({
    type: String,
    content: String
})

module.exports = model('jokes', jokes)