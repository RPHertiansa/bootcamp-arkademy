const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router
    .get('/getall', productController.getAll)
    .get('/getdetail/:id', productController.getDetail)
    .delete('/delete/:id', productController.delete)

module.exports = router;