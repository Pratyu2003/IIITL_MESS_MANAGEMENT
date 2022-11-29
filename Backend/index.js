const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const User = require("./User.model.js")
const app = Express();

app.use(cors());
app.use(Express.json());

mongoose.connect('mongodb://localhost:27017/Mess-Management')

app.get("/auth/register", (req,res) => {
  res.send("Hello World");

})

app.post("/auth/login",async (req,res) => {

  const user =await User.findOne({
    email:req.body.email,
  })

  if (user && user.password === req.body.password) {

    return res.json({status:"ok", user:"true"});
  }
    else if(user && user.password !== req.body.password) {
    return res.json({status:"error", error:"password is incorrect"});
  } else {
    return res.json({status:"error", user:"false"});
  }

})


app.post("/auth/register",async (req,res) => {
  console.log(req.body);

  if(req.body.email.endsWith("@iiitl.ac.in")){

    try{
       await User.create({
        Name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        RoomNo:req.body.RoomNo,
        HostelNo:req.body.HostelNo
      })
      res.json({Message:"User Registered Successfully"})
    }catch(err){
      console.log(err);
      return res.status(200).send("Duplicate Email / already registered")
    }

  }else if(!req.body.email.endsWith("@iiitl.ac.in")){

    return res.status(400).send("Use College Email");

  }else{
    return res.status(404).json({Message: "Error"});

  }

})

app.listen(3001, (req,res) => {
  console.log("Server Running at 3001");
});

