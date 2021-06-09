const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

router.get('/', async(req, res)=>{
    try{
        let productData = await Product.find();
        res.status(200).json(productData);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:err});
    }
});

router.post('/upload', async(req, res)=>{
    try{
        let newProduct = {productName: req.body.name, price: req.body.price};
        let product = Product(newProduct);
        console.log(product);
        let response = await Product.save();
        res.status(200).json({msg:"store successfully"});
    }catch(err){
        console.log(err);
    }
});
module.exports = router;
