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
    }
}

module.exports = product