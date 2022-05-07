const mongoose = require("mongoose");

let WatchSchema = new mongoose.Schema({
  watchName: { type: String, required: true },
  price: { type: Number, required: true },
});
let Watch = mongoose.model("watch", WatchSchema);
module.exports = Watch;
