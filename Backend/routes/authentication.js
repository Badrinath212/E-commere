const express = require("express");
const bycrypt = require("bcrypt");
const {validationResult,body} = require("express-validator")
const UserRegister=require("../models/user");
const jwt=require("jsonwebtoken");
const Token=require('../models/tokens');
const router = express.Router();
const dotenv=require('dotenv');
dotenv.config();

const secretKey=process.env.SECRETKEY;
const validateRegistration=[
    body("userName").not().isEmpty().withMessage("user name required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({min:6}).withMessage("password contains atleast 6 characters long")
]
router.post("/register", validateRegistration, async(req,res)=>{
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
    try{
        const {userName, email, password}=req.body;
        let user=await UserRegister.findOne({email})
        if(user){
            return res.status(201).json(`User is already registered!`);
        }
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password,salt);
        newUser= await UserRegister({userName,email,password:hashedPassword});
        await newUser.save();
        res.json(`user registered ${newUser}`);
    }catch(err){
        res.status(500).json(`try again`);
    }
})

const validateUserLogin=[
    body("email").isEmail().withMessage("Enter the valid Email!"),
    body("password").isLength({min:6}).withMessage("Enter the valid password")
]

router.post("/login", validateUserLogin, async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    try{
        const {email,password}=req.body;
        let USER = await UserRegister.findOne({email});
        if(!USER){
            return res.status(400).json(`user not found. please register!`);
        }
        const isMatch = await bycrypt.compare(password,USER.password);
        if(!isMatch){
            return res.status(400).json(`incorrect password!`);
        }
        const payload={userName:USER};
        const token=jwt.sign(payload,secretKey,{expiresIn:"2h"});
        new Token({token:token,expireTime:Date.now()*2*60*60*1000}).save();
        res.json({message:`Login Sucessfully!`,token:token});
    }catch(err){
        res.status(500).json(`try again`);
    }
})
router.post('/logout',async(req,res)=>{
    try{
        const {token}=req.body;
        if(!token){
            return res.status(400).json({message:"try again!"});
        }
        const response=await Token.findOneAndDelete({token});
        res.json({message:"logout sucessfully!"});
    }catch(err){
        res.status(500).json({message:"server not responding"});
    }
})

module.exports={
    authRouter:router,
    secretKey
};