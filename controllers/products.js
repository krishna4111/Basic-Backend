const Product=require('../model/product')

exports.AddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
  exports.AddProductPost=(req, res, next) => {
    const product=new Product(req.body.title);
    // products.push({ title: req.body.title });
    // console.log(products);
    product.save();
    res.redirect('/');
  }


  exports.getProducts=(req, res, next) => {
    Product.fetchAll((products)=>{
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
  
      });
    });
    // console.log(req.body.name);
    // console.log(req.body.email)
    
  }
  exports.contactUs=(req, res, next) => {
    res.render('contact', {
      pageTitle: 'Contact us',
      path: '/admin/contact',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.success=(req,res,next)=>{
    res.render('success',{
      pageTitle: 'successfully added',
      path: '/admin/success',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    })
  }