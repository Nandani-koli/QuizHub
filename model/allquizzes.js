const mongoose = require('mongoose');

const quizzesSchema = new mongoose.Schema({
    quizname : String,
});

module.exports = mongoose.model('allquizzes',quizzesSchema);
