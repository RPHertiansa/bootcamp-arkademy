const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router
    .get('/getall', productController.getAll)

module.exports = router;