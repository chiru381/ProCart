const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Joi = require("joi");
const _ = require("lodash");
const winston = require("winston");
const httpStatus = require("http-status");
const { OAuth2Client } = require("google-auth-library");

const User = require("../model/User");
const Token = require("../model/Token");
const Otp = require("../model/Otp");
const sendEmail = require("../utils/sendEmail");
const Utilsfile = require("../utils/ejs");
const emailHelper = require("../utils/email");
const { validate } = require("../validations/register.validation");
const { validateforgot } = require("../validations/forgotpassword.validation");
const { validatereset } = require("../validations/resetpassword.validation");
const { successResponse, errorResponse } = require("../utils/message");

// const { logger } = require("../utils/logger");

const client = new OAuth2Client("814906746267-5f5t8s5k1hhftbueamvqcpnbbega027l.apps.googleusercontent.com")

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
      return errorResponse(req, res, 'User Account Not Available', httpStatus.BAD_REQUEST);
      // return res.status(400).json({ error: "User Account Not Available." });
    }
    let result = await bcrypt.compare(password, user.password);

    // console.log(password, user.password, "..........1");

    if (!result) {
      return errorResponse(req, res, 'Password Does Not Matches', httpStatus.BAD_REQUEST);
      // return res.status(400).json({ status: " Password Not Matches" });
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
    winston.info('login success');
    // console.log(payload, "Payload");
    // console.log(process.env.SECRETKEY);
  } catch (err) {
    logger.errorLogger(`Login - ${err}`)
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
    winston.error(err.message);
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

//mobile forgot password
const mobileForgotPassword = async (req, res) => {
  console.log('ok');
  try {
    console.log('try');
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      console.log('email not found');
      // return errorResponse(req, res, "User does not exist.");
    }

    const resetPasswordOtp = Math.floor(1000 + Math.random() * 999999);

    let otpData = new Otp({
      email: req.body.email,
      otp: resetPasswordOtp,
    });
    await otpData.save();

    const mailData = {
      to: user.email,
      name: `${user.firstName}`,
      resetPasswordOtp: resetPasswordOtp,
    };

    const message = await Utilsfile.ejs.convertHtmlToString(
      mailData,
      "emails",
      "forgotPassword.ejs"
    );

    emailHelper
      .forgotPassword(user.email, message)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
        // logger.errorLogger(`Forgot Password Email Error - ${error}`);
      });

      res.send("forgot password otp is sent sucessfully.");
    // return successResponse(
    //   req,
    //   res,
    //   // { userType: user.userType },
    //   "Reset password Otp has been send on your Email Address."
    // );
  } catch (error) {
    // return next(error);
    console.log(error);
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

const resendOtp = async (req, res) => {
  try {
    const reqData = req.body;

    var otpCode = Math.floor(1000 + Math.random() * 999999);

    let otpData = new Otp({
      email: req.body.email,
      otp: otpCode,
    });
    await otpData.save();

    res.send("otp resent successfully.");
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error: "Server Error" });
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

//follow
const follow = async (req, res) => {
  console.log("follow");
  if (req.body.id !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      console.log(user, "........1");
      const currentUser = await User.findById(req.body.id);
      console.log(currentUser, "........1");
      if (!user.followers.includes(req.body.id)) {
        await user.updateOne({ $push: { followers: req.body.id } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};

//unfollow
const unfollow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
};

//get friends
const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList);
  } catch (err) {
    res.status(500).json(err);
  }
};

//google login
const googlelogin = async (req, res) => {
  try {
    const { tokenId } = req.body;

    client.verifyIdToken({ idToken: tokenId, audience: "814906746267-5f5t8s5k1hhftbueamvqcpnbbega027l.apps.googleusercontent.com" }).then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response.payload);

      if(email_verified){
        User.findOne({ email: email }).exec((err, user) => {
          if(err){
            return res.status(500).json({ error: 'something went wrong'});
          }
        })
      } else {
        if(user){
          const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY, { expiresIn: '7d'})
          const { _id, name, email } = user;

          res.json({ token, user: { _id,  name, email }})
        } else {
          let password = email+process.env.SECRETKEY
          let newUser = new User({ name, email, password})
          newUser.save((err, data) => {
            if(err){
              return res.status(500).json({ error: 'something went wrong'});
            }
            const token = jwt.sign({ _id: data._id }, process.env.SECRETKEY, { expiresIn: '7d'})
            const { _id, name, email } = newUser;
  
            res.json({ token, user: { _id,  name, email }})
          })
        }
      }
    })
    console.log('googlelogin');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  mobileForgotPassword,
  verifyOTP,
  resendOtp,
  one,
  two,
  follow,
  unfollow,
  getFriends,
  googlelogin,
};
