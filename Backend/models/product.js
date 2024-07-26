const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    comment: {
        type: String,
        required: true
    }
});
const fashionAttributesSchema = new Schema({
    size: {
        type: [String],
        required: true
    },
    colour: {
        type: [String],
        required: true
    },
    productAttributes: {
        type: Schema.Types.Mixed,
        required: false,
        default:{}
    }
});


const productSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true
    },
    price: {
        type:Number,
        required: true,
        default:0
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: false,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true
    },
    fashionAttributes: {
        type: fashionAttributesSchema,
        required: false
    },
    electronicAttributes: {
        type: Schema.Types.Mixed,
        required: false
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
