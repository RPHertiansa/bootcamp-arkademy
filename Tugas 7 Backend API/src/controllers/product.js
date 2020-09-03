const productModel = require('../models/product');
const {success, failed, successWithMeta} = require('../helpers/response')

const product = {
    getAll: (req, res) => {
        try {
            const name = !req.query.name ? '' : req.query.name
            const sort = !req.query.sort ? 'price' : req.query.sort
            const type = !req.query.type ? 'ASC' : req.query.type
            const limit = !req.query.limit ? 5 : parseInt(req.query.limit)
            const page = !req.query.page ? 1 : parseInt(req.query.page)
            const offset = page === 1 ? 0 : (page-1)*limit
            productModel.getAll(name, limit, offset)
            .then((result) => {
                const totalData = result[0].count
                const meta = {
                    totalData,
                    totalPage: Math.ceil(totalData/limit),
                    currentPage: page
                }
                successWithMeta(res, result, meta, 'Get all product success')
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    },
    getDetail: (req, res) => {
        try {
            const id = req.params.id
            productModel.getDetail(id)
            .then((result) => {
                success(res, result, `Here is the product with id=${id} that you search`)
            })
            .catch((err) => {
                failed(res, [], err.message)
            })
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    },

    getCategory: (req, res) => {
        try {
            const category = req.params.category
            productModel.getCategory(category)
            .then((result) => {
                success(res, result, `Here is the list of ${category} from the menu`)
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    },
    insert: (req,res) => {
        try {
            const body = req.body
            body.image = req.file.filename
            productModel.insert(body)
            .then((result) => {
                success(res, result, `Product is inserted`)
            })
            .catch((err) =>{
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    },
    update: (req,res) => {
        try {
            const id = req.params.id
            const body = req.body
            body.image = req.file.filename
            productModel.update(body, id)
            .then((result) => {
                success(res, result, `Product with id=${id} is updated`)
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            
        }
    },
    delete: (req, res) => {
        try {
            const id = req.params.id
            productModel.delete(id)
            .then((result) => {
                success(res, result, `Product with id=${id} is deleted`)
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    }
    
}

module.exports = product