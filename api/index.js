const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get("/test", (req, res) => {
  res.send("test ok");
});

app.post("/register", (req, res) => {
  res.send("register ok");
});

app.listen(4000, () => {
  console.log("Server is running");
});

// 9J80JlMLtIsL18Sd
