const express=require('express');

const path=require('path')

const app=express();

const adminRoute=require('./Routes/admin');
const shopRoute=require('./Routes/shop');

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);