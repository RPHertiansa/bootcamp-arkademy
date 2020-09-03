const db = require('../configs/db');

const product = {
    getAll: (name, sort, type, limit, offset) => {
        return new Promise((resolve, reject) => {
          db.query(`SELECT product.*, category.category, (SELECT COUNT(*) FROM product) AS count FROM product INNER JOIN category on product.category_id = category.id WHERE name LIKE '%${name}%' ORDER BY ${sort} ${type} LIMIT ${offset},${limit}`, (err, result) => {
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
            category_id='${data.category_id}',
            price='${data.price}',
            image='${data.image}'
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