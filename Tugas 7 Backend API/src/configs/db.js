const mysql = require('mysql2'); //importing mysql

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'food_db'
})

module.exports = connection; //exporting connection as module