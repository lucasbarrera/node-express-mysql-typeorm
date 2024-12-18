const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lucas7698",
  database: "cursos",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  }
  console.log("base de datos conectada");
});
module.exports = db;
