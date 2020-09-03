const historyModel = require('../models/history');
const {success, failed} = require('../helpers/response')

const history = {
    getAll: (req, res) => {
        try {
            const cashier = !req.query.cashier ? '' : req.query.cashier
            historyModel.getAll(cashier)
            .then((result) => {
                success(res, result, 'Get all history success')
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            
        }
    },
    getDetail: (req, res) => {
        try {
            const invoice_id = req.params.invoice_id
            historyModel.getDetail(invoice_id)
            .then((result) => {
                success(res, result, "Here is the history you search")
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            
        }
    },
    insert: (req,res) => {
        try {
            const body = req.body
            historyModel.insert(body)
            .then((result) => {
                success(res, result, 'history is inserted')
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
            const invoice_id = req.params.invoice_id
            const body = req.body
            historyModel.update(body, invoice_id)
            .then((result) => {
                success(res, result, 'history is updated')
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    },
    delete: (req, res) => {
        try {
            const invoice_id = req.params.invoice_id
            historyModel.delete(invoice_id)
            .then((result) => {
                success(res, result, 'history is deleted!')
            })
            .catch((err) => {
                failed(res, [], err.message)
            })    
        } catch (error) {
            failed(res, [], 'Internal server error!')
        }
    }
    
}

module.exports = history