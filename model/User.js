const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  coverPicture: { type: String, default: "" },
  followers: { type: Array, default: [] },
  followings: { type: Array, default: [] },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  isAdmin: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

let User = mongoose.model("user", UserSchema);
module.exports = User;
