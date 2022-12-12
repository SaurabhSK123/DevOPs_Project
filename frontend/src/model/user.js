const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    employee_id : { type :  Number , required : true },
    name : { type : String , required : true }, 
    email : { type : String, required : true },
    password : { type : String }, 
    phone : { type : Number }
})

const Usermodel = mongoose.model('User', UserSchema)

module.exports = Usermodel;