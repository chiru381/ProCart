const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

let Otp = mongoose.model("Otp", otpSchema);
module.exports = Otp;
