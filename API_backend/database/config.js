const mysql = require("mysql2");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'api_autoPecaSeguro',
  port:3307
});

module.exports = db;