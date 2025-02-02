const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  email_verified: { type: String, default: "false" },
  plan: {
    type: Schema.Types.ObjectId,
    ref: 'Plan'
},
  isAdmin: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

let User = mongoose.model("user", UserSchema);
module.exports = User;
