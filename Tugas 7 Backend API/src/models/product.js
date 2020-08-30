const db = require('../configs/db');
const { values } = require('mysql2/lib/constants/charset_encodings');

const product = {
    getAll: () =>{
        return new Promise ((resolve, reject) => {
            db.query(`SELECT * FROM product` , (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },
    getDetail: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM product WHERE id='${id}'`, (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },

    update: (id) => {

    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM product WHERE id='${id}'`, (err, result) =>{
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = product