const express = require("express");
const User = require("../models/User.model");
const router = express();

router.get("/register", (req, res) => {
  res.send("Hello World");
});

router.post("/login", async (req, res) => {
  if(req.body.email ==="admin@admin123.com" && req.body.password==="admin123"){
    return res.json({ status: "ok", user: false,admin:true });
  }
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user && user.password === req.body.password) {
    return res.json({ status: "ok", user: true,admin:false });
  } else if (user && user.password !== req.body.password) {
    return res.json({ status: "error", error: "password is incorrect" });
  } else {
    return res.json({ status: "error", error: "Login Failed" });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  if (req.body.email.endsWith("@iiitl.ac.in")) {
    try {
      await User.create({
        Name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        RoomNo: req.body.RoomNo,
        HostelNo: req.body.HostelNo,
      });
      res.json({ status: "ok", user: true });
    } catch (err) {
      console.log(err);
      return res
        .status(200)
        .json({ status: "error", error: "Duplicate Email" });
    }
  } else if (!req.body.email.endsWith("@iiitl.ac.in")) {
    return res
      .status(400)
      .json({ status: "error", error: "Use college Email" });
  } else {
    return res.status(404).json({ status: "error", error: "404 bad request" });
  }
});

module.exports = router;
