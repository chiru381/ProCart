const express=require('express');
const router=express.Router();
const Watch=require('../model/Watch');

router.get('/', async(req, res)=>{
    try{
        let watchData=await Watch.find();
        res.status(200).json(watchData);
    }catch(err){
        console.log(err);
        res.status(500).json({msg: err});
    }
})

router.post('/upload', async(req, res)=>{
    try{
        let newWatch={watchName: req.body.name, price: req.body.price};
        let watch=Watch(newWatch);
        console.log(watch);
        let response=await Watch.save();
        res.status(500).json({msg: "store successfully"});
    }catch(err){
        console.log(err);
    }
})

module.exports=router;