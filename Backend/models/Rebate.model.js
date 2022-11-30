const mongoose = require("mongoose");

const Rebate = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true
  },
  StartDate:{
    type:String,
    required:true
  },
  EndDate:{
    type:String,
    required:true
  },
  Money:{
    type:String,
    required:true,
  },
  Status:{
    type:String,
    default:"pending"
  }
  },
  {
    collection:"Rebate"
  },
);

const model = mongoose.model("RebateSchema",Rebate);

module.exports = model;