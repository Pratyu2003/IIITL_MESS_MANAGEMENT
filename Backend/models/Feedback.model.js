const mongoose = require("mongoose");

const Feedback = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true
  },
  FeedbackInfo:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  }
  },
  {
    collection:"feedback"
  },
);

const model = mongoose.model("FeedBackSchema",Feedback);

module.exports = model;