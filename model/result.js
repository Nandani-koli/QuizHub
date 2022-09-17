const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    quizname : String,
    username : String,
    score : Number
})

module.exports = mongoose.model('result', resultSchema);
