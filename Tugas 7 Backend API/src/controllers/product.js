const productModel = require('../models/product');
const {success, failed} = require('../helpers/response')

const product = {
    getAll: (req, res) => {
        const name = !req.query.name ? '' : req.query.name
        const limit = !req.query.limit ? 2 : parseInt(req.query.limit)
        const page = !req.query.page ? 1 : parseInt(req.query.page)
        const offset = page === 1 ? 0 : (page-1)*limit
        productModel.getAll(name, limit, offset)
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
            success(res, result, `Here is the product with id=${id} that you search`)
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },

    getCategory: (req, res) => {
        const category = req.params.category
        productModel.getCategory(category)
        .then((result) => {
            success(res, result, `Here is the list of ${category} from the menu`)
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req,res) => {
        const body = req.body
        
        productModel.insert(body)
        .then((result) => {
            success(res, result, `Product is inserted`)
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
            success(res, result, `Product with id=${id} is updated`)
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        productModel.delete(id)
        .then((result) => {
            success(res, result, `Product with id=${id} is deleted`)
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
    
}

module.exports = product