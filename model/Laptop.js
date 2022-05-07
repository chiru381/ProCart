const mongoose = require("mongoose");

let LaptopSchema = new mongoose.Schema({
  laptopName: { type: String, required: true },
  price: { type: Number, required: true },
});

let Laptop = mongoose.model("laptop", LaptopSchema);
module.exports = Laptop;
