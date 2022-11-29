const mongoose = require("mongoose");

const User = new mongoose.Schema({
  Name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    min:[6,"password Too short"]
  },
  FirstName:{
    type:String,
  },
  LastName:{
    type:String,
  },
  Address:{
    type:String,
  },
  City:{
    type:String,
  },
  State:{
    type:String,
  },
  PostalCode:{
    type:String,
  },
  AboutMe:{
    type:String,
  },
  PresentCout:{
    type:Number,
  },
  AbsentCount:{
    type:Number,
  },
  RoomNo:{
    type:String,
    required:true,
    min:3,
    max:3
  },
  HostelNo:{
    type:String,
    required:true,
    min:3,
    max:3
  }
},
{
  collection:"user-data"
},

  )

const model = mongoose.model("UserSchema",User);

module.exports = model;