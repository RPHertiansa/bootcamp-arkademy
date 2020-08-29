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

    insert: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO product ('name', 'category', 'price')
            VALUES ('${data.name}', '${data.category}', '${data.price}')`, (err, result) => {
                if(err) {
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = product