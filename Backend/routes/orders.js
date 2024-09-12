const express = require('express');

const orderRouter = express.Router();

orderRouter.post('/add',(req, res)=>{
    console.log('welcome to the orders');
    res.send('welcome');
});


module.exports = orderRouter;