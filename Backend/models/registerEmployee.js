const mongoose = require('mongoose');

const registerEmployee = mongoose.model('Employee',{
    empName: String,
    empDesignation: String,
    empAddress:String,
    empMobile: String,
    empGender:String,
    empState:String

})

module.exports={registerEmployee}