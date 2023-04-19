exports.error=(req, res, next) => {
  res.render('404', {
    pageTitle: '404',
    path: '/admin/',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}
  