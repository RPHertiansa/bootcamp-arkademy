const express = require('express');
const productController = require('../controllers/product')


const upload = require('../helpers/upload')
const router = express.Router();

router
    .get('/getall', productController.getAll)
    .get('/getdetail/:id', productController.getDetail)
    .get('/category/:category', productController.getCategory)
    .post('/insert', upload.single('image'), productController.insert)
    .put('/update/:id', upload.single('image'), productController.update)
    .delete('/delete/:id', productController.delete)

module.exports = router;