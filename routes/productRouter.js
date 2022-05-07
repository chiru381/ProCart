const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

//upload product api
router.post("/upload", async (req, res) => {
  try {
    let { name, brand, image, price, qty, category, desc, usage } = req.body;
    console.log(name, "Product Name");
    let newProduct = new Product({
      name,
      brand,
      image,
      price,
      qty,
      category,
      desc,
      usage,
    });
    console.log(newProduct);
    newProduct = await newProduct.save();
    res.status(200).json({ result: "success", product: newProduct });
  } catch (err) {
    if (err) throw err;
  }
});

//get all mobiles
router.get("/mobiles", async (req, res) => {
  try {
    let product = await Product.find({ category: "mobiles" });
    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "server error" });
  }
});

//get all watches
router.get("/watches", async (req, res) => {
  try {
    let product = await Product.find({ category: "watches" });
    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "server error" });
  }
});

//get all laptops
router.get("/laptops", async (req, res) => {
  try {
    let product = await Product.find({ category: "laptops" });
    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "server error" });
  }
});

//get product id
router.get("/:id", async (req, res) => {
  try {
    let productId = req.params.id;
    let product = await Product.findOne({ _id: productId });
    console.log(productId);
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ msg: "server error" });
  }
});

module.exports = router;
