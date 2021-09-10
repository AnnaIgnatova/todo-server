const mysql = require("mysql");

const db = mysql.createPool({
  host: "eu-cdbr-west-01.cleardb.com",
  user: "b598f64517e127",
  password: "6c567279",
  database: "heroku_458f90027014db7",
});

module.exports = db;

// mysql://@eu-cdbr-west-01.cleardb.com/heroku_458f90027014db7?reconnect=true