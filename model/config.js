// mongodb+srv://nandanikoli:<password>@cluster0.tekiubm.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');  
const db =  "mongodb+srv://nandanikoli:0xVLXLVYYwjl220x@cluster0.tekiubm.mongodb.net/Quizhub?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));
