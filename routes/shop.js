const path = require('path');

const express = require('express');

const shopController=require('../controllers/products');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

router.get('/',shopController.getProducts );

module.exports = router;