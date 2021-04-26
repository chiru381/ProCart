const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

/* API URL: localhost:8000/product/
Method: GET
Fields: Not Required */
router.get('/', async(req, res)=>{
    try{
        console.log("Inside Product Route");
        let productData = await product.find();
        console.log(productData);
        res.status(200).json(productData);
    }catch(err){
        console.log(err);
        res.status(400).json({msg:err});
    }
});
/* API URL: localhost:8000/product/upload 
Method: POST
Fields: Product Name, Price */
router.post('/upload', async(req, res)=>{
    try{
        let newProduct = {productName: req.body.name, price: req.body.price};
        let product = Product(newProduct);
        console.log(product);
        let response = await product.save();
        res.status(200).json({msg:"store successfully"});
    }catch(err){}
});
module.exports = router;