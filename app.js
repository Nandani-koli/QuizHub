const express = require('express');
const app = express();
const admin = require('./routes/admin')
const user = require('./routes/user');
const home = require('./routes/homepage')

app.set('view engine','ejs');

//Make public folder accessable throughout the app
app.use(express.static("public"));

//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes && middleware
app.use('/admin' ,admin);
app.use('/user',user);

//Home/Index Page of Application
app.use('/',home);

app.listen(5500);