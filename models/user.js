const mongoose = require('mongoose');
//import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName:{type:String,require:true,trim:true},
  email:{type:String,reuire:true,trim:true,validate:{
     validator:(value)=> {
       const result =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return result.test(value);
    },message:"Please enter a valid email address",
  }},
  state :{type:String,default:""},
  city :{type:String,default:""},
  locality :{type:String,default:""},
  password:{type:String,reuire:true,validate:{
    validator:(value) => {
        //check if password is at least 8 charcters long.
        return value.length >= 8;

    },message:"Password must be 8 charcters long",
  }}
});

const User = mongoose.model("User",userSchema);
module.exports = User;
// export default User;