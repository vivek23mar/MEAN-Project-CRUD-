const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;


const { registerEmployee } = require('../models/registerEmployee')

exports.employees = ('/', async (req, res) => {
    await registerEmployee.find((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error Retriving Employee' + JSON.stringify(err, undefined, 2)); }
    })
});

exports.singleEmployee=('/:id',async (req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.send(`no record find of given Single emp id : ${req.params.id}`)
    }
    else {
        await registerEmployee.findById(req.params.id, (err,doc)=>{
            if(!err) { res.send(doc);}
            else { console.log('error to fine employee : '+ JSON.stringify(err,undefined,2));}
        })
    }

})


exports.createEmployee = ('/', async (req, res) => {
    let newEmp = new registerEmployee({
        empName : req.body.empName,
        empDesignation:req.body.empDesignation,
        empAddress:req.body.empAddress,
        empMobile: req.body.empMobile,
        empGender:req.body.empGender,
        empState:req.body.empState

    });
    await newEmp.save((err,doc)=>{
        if(!err) { res.send(doc); }
        else { console.log('Error Retriving Employee' + JSON.stringify(err, undefined, 2)); }
    })

});

exports.deleteEmployee=('/:id',async (req,res)=>{
  
    if(!ObjectId.isValid(req.params.id)){
        return res.send(`no record with given ID : ${req.params.id}`)
    }
    await registerEmployee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else {console.log('error in deleting Employee : '+ JSON.stringify(err,undefined,2))}
    })
})

exports.editEmployee = ('/:id', async (req, res) => {
    try {
        let condition = req.params.id;
        if (!ObjectId.isValid(condition)) {
            return res.send(`no record with given ID to edit : ${condition}`)
        }
        let emp = {
            empName: req.body.empName,
            empDesignation: req.body.empDesignation,
            empAddress: req.body.empAddress,
            empMobile: req.body.empMobile,
            empGender: req.body.empGender,
            
        };
        let doc = await registerEmployee.findByIdAndUpdate(condition, { $set: emp }, { new: true }) 
            console.log({doc})
            res.send(doc);

    } catch (error) {
        console.log('unable to find employee', JSON.stringify(error,undifiend,2))
    }
});
