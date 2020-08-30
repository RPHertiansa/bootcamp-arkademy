const productModel = require('../models/product');
const {success, failed} = require('../helpers/response')

const product = {
    getAll: (req, res) => {
        const name = req.query.name
        productModel.getAll()
        .then((result) => {
            success(res, result, 'Get all product success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        productModel.getDetail(id)
        .then((result) => {
            success(res, result, "Here is the product you search")
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req,res) => {
        const body = req.body
        productModel.insert(body)
        .then((result) => {
            success(res, result, 'Product is inserted')
        })
        .catch((err) =>{
            failed(res, [], err.message)
        })
    },
    update: (req,res) => {
        const id = req.params.id
        const body = req.body
        productModel.update(body, id)
        .then((result) => {
            success(res, result, 'Product is updated')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        productModel.delete(id)
        .then((result) => {
            success(res, result, 'Product is deleted!')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
    
}

module.exports = product