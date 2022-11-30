const express = require("express");
const Feedback = require("../models/Feedback.model");
const Rebate = require("../models/Rebate.model");
const router = express();


router.post("/issues",async (req,res) => {
  console.log(req.body);
  try{
    await Feedback.create({
      Name:req.body.Name,
      Email:req.body.Email,
      FeedbackInfo:req.body.Feedback,
      date:Date.now(),
    });
     res.json({status:"ok",feedback:"Feedback Submitted Successfully"});
  }catch(error){
     res.json({status:"error",error:error})
  }
})

router.get("/issues", async (req,res) =>{
  const Feedbacks = await Feedback.find();
  if(Feedbacks)res.json({status:"ok",data:Feedbacks});
  else res.json({status:"error",error:"Cannot Retrive Feedbacks at this time"});
})

router.post("/rebate", async (req,res) => {
  console.log(req.body);
  try{
    await Rebate.create({
      Name:req.body.Name,
      Email:req.body.Email,
      StartDate:req.body.StartDate,
      EndDate:req.body.EndDate,
      Money:(parseInt(req.body.EndDate.substring(8,10)) - parseInt(req.body.StartDate.substring(8,10)))*101,
    });
    res.json({status:"Ok",rebate:"Rebate Form Submitted Successfully"});
  }catch(error){
    res.json({status:"error",error:error})
 }
});

router.put("/rebate", async(req,res) => {
  console.log(req.body);

  try{
      await Rebate.findByIdAndUpdate(req.body.documentId,{
        status:req.body.status
    });
    res.json({status:"ok",update:"Updated Status Successfully"});
  }catch(err){
    res.json({status:"error",error:err})
  }
})

router.get("/rebate", async (req,res) =>{
  const Rebates = await Rebate.find({});
  console.log(Rebates);
  if(Rebates)res.json({status:"ok",data:Rebates});
  else res.json({status:"error",error:"Cannot Retrive Rebates at this time"});
})

module.exports = router;