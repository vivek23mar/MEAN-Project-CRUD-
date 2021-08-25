const express = require('express');
const cors = require('cors')

const { mongoose } = require('./db');
const userRoute = require('./routes/user')
const employeeRoute = require('./routes/employee')
const userVal=require('./validators/userValidatiors')

const app=express();

//Middleware
app.use(express.json())
app.use(cors());

app.use('/api',userRoute);
app.use('/employee',
userVal.authenticateToken,
employeeRoute);



app.listen(3000, ()=>console.log('Server started at port : 3000'))