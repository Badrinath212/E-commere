
const express = require("express");
const CategoryList = require("../models/categoryList");

const CategoryRouter = express.Router();

CategoryRouter.get("/:category", async (req,res)=>{
    try {
        const {category} = req.params;
        const captilizeWord = (str)=>{
            return str.split('&').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" & ");
        }
        const formatttedCategory = captilizeWord(category);
        const categoryData = await CategoryList.find({category: formatttedCategory});
        if(categoryData.length==0){
            return res.status(404).json(`Something went wrong!`);
        }
        res.status(200).json(categoryData);
    } catch {
        res.status(500).json({message : `Server not responding!`})
    }
});

module.exports = CategoryRouter;