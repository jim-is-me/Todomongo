const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: { type: String, required: true },
    description:{ type: String, required: true },
    date: { type: Date, required: true },
    // password: { type: String, required: true },
    // isEmailVerified: { type: Boolean, default: false }
});

module.exports = { Todo: mongoose.model('Todo', todoSchema) }