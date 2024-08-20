const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoryListSchema = new Schema({
    category :{
        type : String,
        required : true
    },
    attributes : {
        type : Map,
        of : String,
        required : true
    }
});

const CategoryList = mongoose.model("categoryList",categoryListSchema);

module.exports = CategoryList;