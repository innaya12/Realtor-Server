const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thbv1234',
    database: 'realtor'
});

module.exports = connection;
