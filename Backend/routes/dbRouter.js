const express = require("express");
const Product = require("../models/product");
const { validationResult ,body} = require("express-validator");

const router = express.Router();
const validateForm = [
    body("name").not().isEmpty().withMessage("enter the product name"),
    body("image").isURL().withMessage("enter image url"),
    body("brand").not().isEmpty().withMessage("enter the brand name"),
    body("category").not().isEmpty().withMessage("enter the category"),
    body("description").not().isEmpty().withMessage("enter the description"),
    body("rating").not().isEmpty().withMessage("enter the rating"),
    body("countInStock").not().isEmpty().withMessage("enter the stock"),
]

router.post("/", validateForm ,async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json({errors : errors.array()});
    }
    try{
        const {name,image,brand,category,description,rating,countInStock}=req.body;
        const newProduct = await Product({
            name:name,
            image:image,
            brand:brand,
            category:category,
            description:description,
            rating:rating,
            countInStock:countInStock
        });
        await newProduct.save();
        res.status(201).json("product is added!");
    }catch(err){
        res.status(500).json(`Error ${err}`);
    }
});

module.exports=router;