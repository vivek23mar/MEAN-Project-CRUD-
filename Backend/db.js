const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DummyApp', (err)=>{
    if(!err){
        console.log('MongoDB connection succeeded......');
    }
    else
        console.log('Error in DB cconnection :' + JSON.stringify(err, undefined,2));

});

module.exports=mongoose;