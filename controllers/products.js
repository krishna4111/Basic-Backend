const products = [];

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
    products.push({ title: req.body.title });
    console.log(products);
    res.redirect('/');
  }


  exports.shop=(req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.email)
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true

    });
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

