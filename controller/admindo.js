const mongoose = require('mongoose');  
require('../model/config');
let alert = require('alert'); 
const quizSchema = require('../model/quiz');
const allquiz = require('../model/allquizzes');

module.exports = {
    create : async (req,res) => {
         const qname = req.body.qname;

         //list the name of all quizzes in separate collection
        let savequizname = allquiz({
            quizname : qname,
        });
        await savequizname.save();

         const quizmodel = mongoose.model(quizname,quizSchema);
         let data1 = quizmodel({
            queNo : req.body.qno1,
            quetion : req.body.quetion1,
            option1 : req.body.option1,
            option2 : req.body.option2,
            option3 : req.body.option3, 
            option4: req.body.option4,
            answer : req.body.answer1
         });

         let data2 = quizmodel({
            queNo : req.body.qno2,
            quetion : req.body.quetion2,
            option1 : req.body.option21,
            option2 : req.body.option22,
            option3 : req.body.option23,
            option4: req.body.option24,
            answer : req.body.answer2
         });

         let data3 = quizmodel({
            queNo : req.body.qno3,
            quetion : req.body.quetion3,
            option1 : req.body.option31,
            option2 : req.body.option32,
            option3 : req.body.option33,
            option4: req.body.option34,
            answer : req.body.answer3
         });

         let data4 = quizmodel({
            queNo : req.body.qno4,
            quetion : req.body.quetion4,
            option1 : req.body.option41,
            option2 : req.body.option42,
            option3 : req.body.option43,
            option4: req.body.option44,
            answer : req.body.answer4
         });

         let data5 = quizmodel({
            queNo : req.body.qno5,
            quetion : req.body.quetion5,
            option1 : req.body.option51,
            option2 : req.body.option52,
            option3 : req.body.option53,
            option4: req.body.option54,
            answer : req.body.answer5
         });
        let result = await quizmodel.insertMany([data1,data2,data3,data4,data5]);

        alert("Quiz Created Successfully...");
        res.render('admin');  
    },

    //show the previous quizzes
    previousquizzes : (req,res)=> {
        allquiz.find({}, function(err,qnames) {
            res.render('previous-quizzes',{
                allquizname : qnames,
            });
        })  
    }
}