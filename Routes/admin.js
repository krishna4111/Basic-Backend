const express=require('express');

const route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="quantity"><button type="submit">Add Product</button></form>')
})                                                              
route.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/');
})


module.exports=route;