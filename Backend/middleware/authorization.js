const jwt=require('jsonwebtoken');
const {secretKey}=require('../routes/authentication');

const validateToken=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token){
        return res.status(401).json({message:"invalid token"});
    }
    const tokenWithoutBearer=token.startsWith("Bearer ") ? token.slice(7) : token;
    jwt.verify(tokenWithoutBearer,secretKey,(err,decoded)=>{
        if(err){
            return res.status(500).json({message:"authentication failed"});
        }
        req.user=decoded;
        next();
    })
}

module.exports=validateToken;
