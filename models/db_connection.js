const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "",
  database: "estudiantedb"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
