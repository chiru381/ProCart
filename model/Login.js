const mongoose = require("mongoose");

let LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

  created: { type: Date, default: Date.now() },
});

let Login = mongoose.model("login", LoginSchema);
module.exports = Login;
