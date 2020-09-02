const mysql = require('mysql2'); //importing mysql
const { DB_HOST, DB_USER, DB_NAME } = require('../helpers/env')

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    dateStrings: 'date'
});

module.exports = connection; //exporting connection as module