const express=require('express');
const router=express.Router();
const Laptop=require('../model/Laptop');
const Product = require('../model/Product');

router.get('/', async(req, res)=>{
    try{
        let laptopData=await Laptop.find();
        res.status(200).json(laptopData);
    }catch(err){
        console.log(err);
        res.status(500).json({msg: err});
    }
})

router.post('/upload', async(req, res)=>{
    try{
        let newLaptop={laptopName: req.body.name, price: req.body.price};
        let laptop=Laptop(newLaptop);
        console.log(laptop);
        let response=await Product.save();
        res.status(500).json({msg: "store successfully"});
    }catch(err){
        console.log(err);
    }
})

module.exports=router;