const categoryModel = require('../models/category');
const {success, failed} = require('../helpers/response')

const category = {
    getAll: (req, res) => {
        const category = !req.query.category ? '' : req.query.category
        categoryModel.getAll(category)
        .then((result) => {
            success(res, result, 'Get all category success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        categoryModel.getDetail(id)
        .then((result) => {
            success(res, result, "Here is the category you search")
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req,res) => {
        const body = req.body
        categoryModel.insert(body)
        .then((result) => {
            success(res, result, 'category is inserted')
        })
        .catch((err) =>{
            failed(res, [], err.message)
        })
    },
    update: (req,res) => {
        const id = req.params.id
        const body = req.body
        categoryModel.update(body, id)
        .then((result) => {
            success(res, result, 'category is updated')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        categoryModel.delete(id)
        .then((result) => {
            success(res, result, 'category is deleted!')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
    
}

module.exports = category