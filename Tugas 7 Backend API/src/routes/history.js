const express = require('express');
const historyController = require('../controllers/history')

const router = express.Router();

router
    .get('/getall', historyController.getAll)
    .get('/getdetail/:invoice_id', historyController.getDetail)
    .post('/insert', historyController.insert)
    .put('/update/:invoice_id', historyController.update)
    .delete('/delete/:invoice_id', historyController.delete)

module.exports = router;