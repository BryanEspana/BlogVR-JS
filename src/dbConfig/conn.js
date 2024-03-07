import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'bryan',
  database: 'blogvr_db',
  password: 'bryan123',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
