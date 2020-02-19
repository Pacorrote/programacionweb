const mysql = require("mysql");

//local mysql db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "estudiante"
});

connection.connect(function(err) {
  if (err) throw err;

  console.log("Conexion correcta");
});

module.exports = connection;
