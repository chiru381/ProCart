const express = require("express");
const User = require("../model/User");
const router = express.Router();

const bcrypt = require("bcryptjs");

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
    console.log(payload, "Payload");
  } catch (err) {
    if (err) throw err;
    resp.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;