const express = require("express");
const User = require("../model/User");
const Token = require("../model/Token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

//register api
router.post("/register", async (req, res) => {
  try {
    let { name, email, phone_number, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({ error: "User Already Existed" });
    }
    let salt = await bcrypt.genSaltSync(10);
    password = await bcrypt.hash(password, salt);

    user = new User({ name, email, phone_number, password });
    console.log(user);
    user = await user.save();
    res.status(200).json({ result: "Success", user: user });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
  }
});

//login api
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User Account Not Available" });
    }
    let result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({ status: " Password Not Matches" });
    }
    let payload = {
      user: { id: user.id },
    };
    jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
      if (err) throw err;
      console.log(token);
      // res.status(200).json({ status: "Login success", token: token });
      res.header("x-token", token).send({ msg: "login success" });
    });

    console.log(payload, "Payload");
    console.log(process.env.SECRETKEY);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
  }
});

//password reset api
router.post("/password-reset", async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);

    res.send("password reset link sent to your email account");
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/one", async (req, res) => {
  try {
    let token = await Token.find().populate("users");
    token = token.save();
    console.log(token);
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
});

//set password
router.post("/:userId/:token", async (req, res) => {
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    console.log(req.user.id);
    console.log(req.user);
    let user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user, token);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
