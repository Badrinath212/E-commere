const mongoose = require('mongoose');

const schema = mongoose.Schema;

const cartSchema = new schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    cartItems : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Product',
                required : true
            },
            Qty : {
                type : Number,
                required : true,

            }
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;