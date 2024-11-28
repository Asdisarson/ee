const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/sync/:productId', productController.syncProduct);
router.post('/sync-all', productController.syncAllProducts);

module.exports = router; 