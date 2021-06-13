const express = require("express");
const User = require("../model/User");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const auth = require('../middleware/auth');

router.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({ error: "User Already Existed" });
    }
    let salt = await bcrypt.genSaltSync(10);
    password = await bcrypt.hash(password, salt);

    user = new User({ name, email, password });
    console.log(user);
    user = await user.save();
    res.status(200).json({ result: "Success", user: user });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return resp.status(400).json({ error: "User Account Not Available" });
    }
    let result = await bcrypt.compare(password, user.password);
    if (!result) {
      return resp.status(400).json({ status: " Password Not Matches" });
    }
    let payload = {
      user: { id: user.id },
    };
    jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
      if(err) throw err;
      console.log(token);
      res.status(200).json({ status: "Login success", token: token });
    });
    console.log(payload, "Payload");
    console.log(process.env.SECRETKEY);
  } catch (err) {
    if (err) throw err;
    resp.status(500).json({ error: "Server Error" });
  }
});

router.get("/", auth, async(req, res)=>{
  try {
    console.log(req.user.id);
    console.log(req.user);
    let user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    if(err) throw err;
    res.status(500).json({ error: "server error" });
  }
})

module.exports = router;