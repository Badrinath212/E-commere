const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User",
        index : true
    },
    orderItems : [
        {
            name : {
                type : String,
                required : true
            },
            qty : {
                type : Number,
                required : true
            },
            image : {
                type : String,
                required : true
            },
            price : {
                type : Number,
                required : true
            },
            product : {
                type : mongoose.Schema.Types.ObjectId,
                required : true,
                ref : "Product",
                index : true
            }
        }
    ],
    shippingAddress : {
        address : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        postalCode : {
            type : String,
            required : true
        },
        country : {
            type : String,
            required : true
        }
    },
    shippingAmount: {
        type: Number,
        required: true
    },
    tax : {
        type : Number,
        required : true
    },
    totalAmount : {
        type : Number,
        required : true
    },
    paymentResult : {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        updateTime: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    orderStatus : {
        type : String,
        enum : ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        required : true,
        index : true
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
