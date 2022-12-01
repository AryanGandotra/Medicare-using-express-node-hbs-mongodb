const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
})


const Signup = new mongoose.model("SignUp",userSchema);

module.exports = Signup;