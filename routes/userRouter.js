const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  mobileForgotPassword,
  verifyOTP,
  one,
  two,
  follow,
  unfollow,
  getFriends,
  googlelogin,
  getCountries,
  getStates,
  getCities,
} = require("../controllers/userController");
const auth = require("../utils/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/:userId/:token", resetPassword);
router.post("/mobile", mobileForgotPassword);
router.post("/one", one);
router.get("/", auth, two);
router.post("/verifyOTP", verifyOTP);
router.put("/:id/follow", follow);
router.put("/:id/unfollow", unfollow);
router.get("/friends/:userId", getFriends);
router.post("/googlelogin", googlelogin);
router.get("/country", getCountries);
router.get("/state", getStates);
router.get("/city", getCities);

module.exports = router;
