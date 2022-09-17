const mongoose = require('mongoose');  
require('../model/config');
const allquiz = require('../model/allquizzes');

module.exports = {
    homecontent : (req,res) => {
        allquiz.find({}, function(err,qnames) {
            res.render('home',{
                allquizname : qnames,
            });
        })  
    }
}