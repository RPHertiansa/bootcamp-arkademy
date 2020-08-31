const historyModel = require('../models/history');
const {success, failed} = require('../helpers/response')

const history = {
    getAll: (req, res) => {
        const cashier = !req.query.cashier ? '' : req.query.cashier
        historyModel.getAll(cashier)
        .then((result) => {
            success(res, result, 'Get all history success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const invoice_id = req.params.invoice_id
        historyModel.getDetail(invoice_id)
        .then((result) => {
            success(res, result, "Here is the history you search")
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req,res) => {
        const body = req.body
        historyModel.insert(body)
        .then((result) => {
            success(res, result, 'history is inserted')
        })
        .catch((err) =>{
            failed(res, [], err.message)
        })
    },
    update: (req,res) => {
        const invoice_id = req.params.invoice_id
        const body = req.body
        historyModel.update(body, invoice_id)
        .then((result) => {
            success(res, result, 'history is updated')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    delete: (req, res) => {
        const invoice_id = req.params.invoice_id
        historyModel.delete(invoice_id)
        .then((result) => {
            success(res, result, 'history is deleted!')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
    
}

module.exports = history