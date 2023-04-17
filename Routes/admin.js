const path=require('path');

const express=require('express');

const route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','addProduct.html'))
})                                                              
route.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/');
})
route.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})
route.post('/success',(req,res,next)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    res.sendFile(path.join(__dirname,'../','views','success.html'))
})


module.exports=route;