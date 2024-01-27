//1 import express
const express = require('express')

//2 import cors
const cors = require('cors')

const logic = require('./Services/logics')

const contactserver = express()

contactserver.use(cors({
    origin:"http://localhost:3000"
}))

contactserver.use(express.json())

//6 Define the port number 
contactserver.listen(8000,()=>{
    console.log('contact Server listening on port 8000');
})

//API call for get all employees details
contactserver.get('/getcontacts',(req,res)=>{
    logic.getAllContact().then((response)=>{//response - all employees details
        res.status(response.statusCode).json(response);
    })
})

//api call for add an contact
contactserver.post('/add-an-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.email,req.body.city,req.body.street,req.body.zipcode,req.body.phoneno).then((response)=>{
     res.status(response.statusCode).json(response)
    })
})

//api call for update an employee
contactserver.post('/update-an-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name,req.body.email,req.body.city,req.body.street,req.body.zipcode,req.body.phoneno).then((response)=>{
        //request an employee details
        res.status(response.statusCode).json(response);
    })
})

//API call for get an contact details
contactserver.get('/get-an-contact/:id',(req,res)=>{
    logic.getAnContact(req.params.id).then((response)=>{//response - an employees details
        res.status(response.statusCode).json(response);
    })
})
