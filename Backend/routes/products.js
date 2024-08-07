const express=require('express');
const Product=require('../models/product');
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        const products=await Product.find();
        if(products.length==0){
            res.status(404).json({message:"something went wrong!"});
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:'Server not responding!'})
    }
});

module.exports={
    productRouter:router
};