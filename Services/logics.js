//Backend logics

//import db.js file
const db = require('../services/db')


//get all the contact details from the database

const getAllContact =()=>{
    return db.users.find().then((result)=>{//result - details of employees
        if(result){
                return {//send to frontend
                    statusCode:200,
                    contacts:result
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find employee'
                }
        }
    })
}

const addContact=(id,name,email,city,street,zipcode,phoneno)=>{

    console.log(id);
return db.users.findOne({id}).then((result)=>{
if(result){
    return{
        statusCode:404,
        message : "user already exists"
    }
}
else{
    const newContact = new db.users({id,name,email,city,street,zipcode,phoneno})
    newContact.save()
    return{
        statusCode:200,
        message:"user added succesfully"
    }
}
})
}

//update an employee

const updateContact = (id,name,email,city,street,zipcode,phoneno)=>{
    return db.users.findOne({id}).then((result)=>{
     if(result){
result.id = id;
result.name = name;
result.email = email;
result.city = city;
result.street = street;
result.zipcode = zipcode;
result.phoneno = phoneno;

//save updated details into db
result.save()

return{
 //send to frontend
 satatusCode:200,
 message:"user data updated succesfully"
}

     }
     else{
         return{
             statusCode:404,
             message:"can't find user"
         }
     }
    })
}
//
const getAnContact=(id)=>{
    return db.users.findOne({id}).then((result)=>{//result - details of contacts
        if(result){
                return {//send to frontend
                    statusCode:200,
                    users:result
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find user'
                }
        }
    })
}

module.exports = {
   getAllContact,
   addContact,
   updateContact,
   getAnContact
}