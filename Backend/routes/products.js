const express = require('express');
const Product = require('../models/product');
const Offer = require('../models/offers');
const router=express.Router();

router.get('/',async(req, res) => {
    try{
        const subCategory = req.query.subcategory;
        const products = await Product.find({subcategory : subCategory});
        if(products.length==0){
            return res.status(404).json({message:"something went wrong!"});
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:'Server not responding!'})
    }
});

router.get('/offers', async (req, res) => {
    try {
        const offers = await Offer.find();
        if(offers.length==0){
            return res.status(404).json({message : "something went wrong!. please check your internet connection."});
        }
        res.status(200).json(offers);
    } catch(err) {
        res.status(500).json({message : 'Internal Server Error'});
    }
})

module.exports={
    productRouter:router
};