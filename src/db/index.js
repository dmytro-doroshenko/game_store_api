const mysql = require('mysql2');

const { config } = require('../config');

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
});

const promisePool = pool.promise();

module.exports = promisePool;
