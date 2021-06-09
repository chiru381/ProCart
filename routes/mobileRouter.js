const express=require('express');
const router=express.Router();
const Mobile=require('../model/Mobile');

router.get('/', async(req, res)=>{
    try{
        let mobileData=await Mobile.find();
        res.status(200).json(mobileData);
    }catch(err){
        console.log(err);
        res.status(500).json({msg: err});
    }
})

router.post('/upload', async(req, res)=>{
    try{
        let newMobile={mobileName: req.body.name, price: req.body.price};
        let mobile=Mobile(newMobile);
        console.log(mobile);
        let response=await Mobile.save();
        res.status(500).json({msg: "store successfully"});
    }catch(err){
        console.log(err);
    }
})

module.exports=router;