const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get("/test", (req, res) => {
  res.send("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.create({ username, password });
  jwt.sign({ userId: createdUser._id }, jwtSecret, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).statusCode(201).json("ok");
  });
});

app.listen(4000, () => {
  console.log("Server is running");
});

// 9J80JlMLtIsL18Sd
