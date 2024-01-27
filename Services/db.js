//Connection code of Node and mongodb
//1 import mongoose
const mongoose = require('mongoose')

//Connection string
mongoose.connect('mongodb://localhost:27017/contact')

//model creation
const users = mongoose.model('users', {

    id: String,
    name: String,
    email: String,
    city: String,
    street: String,
    zipcode: String,
    phone: String
})

module.exports = {
    users
}