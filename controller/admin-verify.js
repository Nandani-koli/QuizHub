let alert = require('alert'); 

module.exports= {
    verify : (req,res) =>{
    const username = req.body.adminname;
    const pass = req.body.adminpass;

    if(username == 'admin' && pass == 'admin123')
    {
        alert("successful logged in");
        res.render('admin');
    }
    else{
        alert("Invalid credential");
    }
    },

    createquiz : (req,res) => {
        res.render('create-quiz');
    },

    result : (req,res) => {
        res.render('Result');
    },

    logout : (req,res) => {
        res.redirect('home');
    }
}