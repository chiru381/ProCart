const mongoose = require("mongoose");

let MobileSchema = new mongoose.Schema({
  mobileName: { type: String, required: true },
  price: { type: Number, required: true },
});
let Mobile = mongoose.model("mobile", MobileSchema);
module.exports = Mobile;
