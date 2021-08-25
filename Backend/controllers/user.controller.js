const User = require('../models/Users')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.userRegister = (req,res,next)=>{
    console.log('Register route working')

    let user = new User();
    user.fullName=req.body.fullName;
    user.email=req.body.email;
    user.mobile=req.body.mobile;
    user.password=req.body.password;

    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }else if(err.code==11000){
            res.status(422).send('Duplicate Email ID found');
        }else{
            res.send(console.log('error', JSON.stringify(err,undefined,2)))
            
        }
    });
}

module.exports.auth = async (req, res) => {
    let condition = req.body.email;
    let password = req.body.password;

    try {
         
        const user = await User.findOne({ email: condition });        
        if (!user) {
            res.status(404).send('Email ID not found')
        } else {
            let result = await bcrypt.compare(password, user.password)
          
            if (result) {
                let payload ={'email':user.email, 'name':user.fullName}
                console.log({payload})
                const accessToken = jwt.sign(payload, 'SecretKsdafasdfafgaey', {expiresIn: "24h"} );
                console.log('token : ', accessToken);
                 console.log(typeof(accessToken))

                res.json({accessToken:accessToken, email:user.email})
            } else {
                console.log('wrong password')
                res.status(400).send('Pssowrd not matched')
            }

        }
    } catch (err) {
        console.log(err)
        res.status(500).send('internal server error')
    }


}

