const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  verifyOTP,
  one,
  two,
} = require("../controllers/userController");
const auth = require("../utils/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/:userId/:token", resetPassword);
router.post("/one", one);
router.get("/", auth, two);
router.post("/verifyOTP", verifyOTP);

module.exports = router;
