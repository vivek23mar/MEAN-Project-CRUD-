const express = require('express');
var router = express.Router();

var registerEmployeeController=require('../controllers/registerEmployeeController');


//localhost:3000/employee
router.get('/',registerEmployeeController.employees);
router.get('/:id',registerEmployeeController.singleEmployee);

router.post('/',registerEmployeeController.createEmployee);
router.delete('/:id',registerEmployeeController.deleteEmployee);
router.put('/:id',registerEmployeeController.editEmployee);







module.exports=router