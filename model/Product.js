const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    productName: {type:String, required: true},
    price: {type: Number, required: true}
});
let Product = mongoose.model("product", ProductSchema);
module.exports = Product;