const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database : 'blog',
    user: 'mamou',
    password: 'mamou'

});

module.exports = pool;