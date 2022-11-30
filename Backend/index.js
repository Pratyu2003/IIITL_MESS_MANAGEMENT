const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/auth.route");
const admin = require("./routes/admin.route")
const app = Express();

app.use(cors());
app.use(Express.json());
app.use("/auth", auth);
app.use("/admin",admin);

mongoose.connect("mongodb://localhost:27017/Mess-Management");

app.listen(3001, (req, res) => {
  console.log("Server Running at 3001");
});
