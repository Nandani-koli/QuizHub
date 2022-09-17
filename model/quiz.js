const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    queNo : Number,
    quetion : String,
    option1 : String,
    option2 : String,
    option3 : String,
    option4: String,
    answer : String
})

// module.exports = mongoose.model(quizname,quizSchema);
module.exports = quizSchema;
