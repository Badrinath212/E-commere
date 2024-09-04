const mongoose = require('mongoose');

const schema = mongoose.Schema;

const offerSchema = new schema({
    offer : {
        type : String,
        required : true
    }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;