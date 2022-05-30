const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Joi = require("joi");
const _ = require("lodash");

const User = require("../model/User");
const Token = require("../model/Token");
const sendEmail = require("../utils/sendEmail");
const { validate } = require("../validations/register.validation");
const { validateforgot } = require("../validations/forgotpassword.validation");
const { validatereset } = require("../validations/resetpassword.validation");

//register
const register = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { user_id, name, email, password, phone_number } = req.body;
  let user = await User.findOne({ email: email });

  if (user) return res.status(400).send("user already exists");
  new_user = await new User({
    user_id,
    name,
    email,
    password,
    phone_number,
  });

  const salt = await bcrypt.genSalt(10);
  new_user.password = await bcrypt.hash(new_user.password, salt);

  new_user = await new_user.save();

  res.send(
    _.pick(new_user, ["_id", "user_id", "email", "phone_number", "status"])
  );
};

//login
const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User Account Not Available." });
    }
    let result = await bcrypt.compare(password, user.password);

    // console.log(password, user.password, "..........1");

    if (!result) {
      return res.status(400).json({ status: " Password Not Matches" });
    }
    let payload = {
      user: { id: user.id },
    };
    jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
      if (err) throw err;
      // console.log(token);

      // res.status(200).json({ status: "Login success", token: token });
      // res.header("x-token", token).send({ msg: "login success" });

      const { password, isAdmin, ...otherDetails } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ ...otherDetails });
    });

    // console.log(payload, "Payload");
    // console.log(process.env.SECRETKEY);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
  }
};

//forgotPassword
const forgotPassword = async (req, res) => {
  try {
    const { error } = validateforgot(req.body);
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

    let email = user.email;
    const otp_code = Math.floor(1000 + Math.random() * 900000);
    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(email, link, otp_code);

    res.send("password reset link sent to your email account");
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
};

//resetPassword
const resetPassword = async (req, res) => {
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

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //deleted token model inside data.
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
};

const verifyOTP = async (req, res) => {
  try {
    let { user_id, otp } = req.body;
    if (!user_id || !otp) {
      throw error("empty otp details are not allowed");
    } else {
      const otps = await Otp.find({
        user_id,
      });
      if (otps.length <= 0) {
        throw error("account record does not exists");
      } else {
        const { expiresAt } = otps[0];
        const hashedOTP = otps[0].otp;

        if (expiresAt < Date.now()) {
          await Otp.deleteMany({ user_id });
          throw error("otp is expired");
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP);

          if (!validOTP) {
            throw error("invalid code passed.check your inbox.");
          } else {
            await User.updateOne({ _id: user_id }, { verified: true });
            await Otp.deleteMany({ user_id });
            res.json({
              status: "verified",
              message: "user email verified successfully",
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({ status: "failed", message: error.message });
  }
};

const one = async (req, res) => {
  try {
    let token = await Token.find().populate("users");
    token = token.save();
    console.log(token);
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
  }
};

const two = async (req, res) => {
  try {
    console.log(req.user.id);
    console.log(req.user);
    let user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user, token);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "server error" });
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  verifyOTP,
  one,
  two,
};
