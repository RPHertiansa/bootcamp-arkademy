const db = require('../configs/db');

const product = {
    getAll: (name, limit, offset) => {
        return new Promise((resolve, reject) => {
          db.query(`SELECT *, (SELECT COUNT(*) FROM product) AS count FROM product WHERE name LIKE '%${name}%' LIMIT ${offset}, ${limit}`, (err, result) => {
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

    getCategory: (category) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM product WHERE category='${category}' ORDER BY price`, (err, result) => {
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
            db.query(`INSERT INTO product (name, price, image, category_id)
            VALUES ('${data.name}', '${data.price}', '${data.image}', '${data.category_id}')`, (err, result) => {
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
            db.query(`UPDATE product SET
            name='${data.name}',
            category='${data.category}',
            price='${data.price}' 
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