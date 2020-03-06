const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '134.209.126.142',
    user: 'db_site_docs',
    password: "bC#7ecN0",
    database: "db_site_docs",
})

module.exports = connection
