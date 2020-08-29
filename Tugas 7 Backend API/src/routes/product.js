const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router
    .get('/getall', productController.getAll)
    .post('/insert', productController.insert)

module.exports = router;