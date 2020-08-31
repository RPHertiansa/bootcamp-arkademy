const db = require('../configs/db');

const history = {
    getAll: (cashier) => {
        return new Promise((resolve, reject) => {
          db.query(`SELECT * FROM history WHERE cashier LIKE '%${cashier}%' LIMIT 5`, (err, result) => {
            if(err){
              reject(new Error(err))
            }else{
              resolve(result)
            }
          })
        })
      },
    getDetail: (invoice_id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM history WHERE invoice_id='${invoice_id}'`, (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },

    insert: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO history (cashier, date, orders, amount)
            VALUES ('${data.cashier}', '${data.date}', '${data.orders}', '${data.amount}')`, (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            } )
        })
    },

    update: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE history SET
            cashier='${data.cashier}',
            date='${data.date}',
            orders='${data.orders}',
            amount='${data.amount}' 
            WHERE id='${id}'`,
            (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM history WHERE id='${id}'`, (err, result) =>{
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = history