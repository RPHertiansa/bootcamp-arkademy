const db = require('../configs/db');

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
    }
}

module.exports = product