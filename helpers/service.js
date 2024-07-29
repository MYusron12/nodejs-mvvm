import { createPool } from 'mysql2'
const pool = createPool({
  host: '10.0.0.114',
  user: 'root',
  password: 'developjadin123',
  database: 'dev_sitedcjkt'
})
export default pool.promise()