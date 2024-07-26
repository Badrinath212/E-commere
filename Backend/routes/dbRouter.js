const express = require("express");
const Product = require("../models/product");
const { validationResult ,body} = require("express-validator");

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
        const {name,image,price,brand,category,description,rating,countInStock,productAttributes}=req.body;
        const newProductData = {
            name,
            image: image.split(","),
            price,
            brand,
            category,
            description,
            rating,
            countInStock
        };
        if(category==="Electronics"){
            newProductData.electronicAttributes=productAttributes;
        }else{
            newProductData.fashionAttributes=productAttributes;
        };
        const newProduct = new Product(newProductData);
        await newProduct.save();
        res.status(201).json("product is added!");
    }catch(err){
        res.status(500).json(`Error ${err}`);
    }
});

module.exports=router;