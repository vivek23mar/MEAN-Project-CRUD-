const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');


const userSchema = new mongoose.Schema({
    fullName :{
        type:String,
        required:"cant be empty Full name"
    },
    mobile:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    saltSecret : String
})


// Events
userSchema.pre('save',  function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })
    
});

module.exports=mongoose.model('user',userSchema);