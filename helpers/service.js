const mysql = require('mysql2')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
})
module.exports = pool.promise()