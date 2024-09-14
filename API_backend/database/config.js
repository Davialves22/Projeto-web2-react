const mysql = require("mysql2");

const db = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: 'root',
  // database: 'api_autoPecaSeguro',
  // port:3307
  host: 'localhost',
  user: 'aluno',
  password: 'ifpecjbg',
  database: 'api_autoPecaSeguro',
});

module.exports = db;