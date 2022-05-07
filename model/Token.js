const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TokenSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // expires: 3600,
    // if expires used that time after 3600 seconds automatically deleted in database.
  },
});

let Token = mongoose.model("Token", TokenSchema);
module.exports = Token;
