const express = require("express");
const Product = require("../models/product");
const CategoryList = require("../models/categoryList");
const { validationResult ,body} = require("express-validator");
const Offer = require('../models/offers');

const router = express.Router();
const validateForm = [
    body("name").not().isEmpty().withMessage("enter the product name"),
    body("brand").not().isEmpty().withMessage("enter the brand name"),
    body("category").not().isEmpty().withMessage("enter the category"),
    body("rating").not().isEmpty().withMessage("enter the rating"),
    body("countInStock").not().isEmpty().withMessage("enter the stock"),
]

router.post("/", validateForm ,async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json({errors : errors.array()});
    }
    try{
        const {name,image,price,brand,category,description,rating,subcategory,countInStock,attributes}=req.body;
        const newProductData = {
            name,
            image: image.split(","),
            price,
            brand,
            category,
            description,
            rating,
            subcategory,
            countInStock,
            attributes
        };
        const newProduct = new Product(newProductData);
        await newProduct.save();
        res.status(201).json("product is added!");
    }catch(err){
        res.status(500).json(`Error ${err}`);
    }
});

router.post("/category",async (req,res)=>{
    try{
        const {category,attributes} = req.body;
        const newList = new CategoryList({category,attributes})
        await newList.save();
        res.status(201).json({message:"data successfully added!"})
    } catch(err){
        res.status(500).json({message:`Error: ${err}`})
    }
})

router.post('/add',async (req,res)=>{
    try {
        const {offer} = req.body;
        const newOffer = new Offer({offer: offer});
        await newOffer.save();
        res.status(201).json({message : 'sucessfully added!'});
    } catch(err){
        res.status(500).json({message : 'server not responding!'});
    }
})

module.exports={dbRouter : router};