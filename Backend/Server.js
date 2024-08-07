const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
const { authRouter } = require("./routes/authentication.js");
const dbRouter= require("./routes/dbRouter");
const validateToken=require('./middleware/authorization');
const {productRouter}=require('./routes/products.js');
const app = express();
const dotenv=require('dotenv');

dotenv.config();

const port = process.env.PORT || 2000;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/E-commerce");

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection established");
});

app.use("/register",dbRouter);
app.use("/api/auth",authRouter);
app.use('/protected',validateToken,(req,res)=>{
    res.json({message:"permission granted",user:req.user});
})
app.use('/api/products',productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
