const mongoose=require('mongoose');
const schema=mongoose.Schema;

const tokenSchema=new schema({
    token:{
        type:String,
        required:true,
    },
    expireTime:{
        type:String,
        required:true
    }
});

const Token=mongoose.model('Token',tokenSchema);
module.exports=Token;