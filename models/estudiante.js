const db = require("./db_conexion.js");

Estudiante.getEstudiantes = function(result, error) {
  db.query("Select * from estudiante", function(err, res) {
    if (err) {
      console.log("error: ", err);
      return null;
    } else {
      return res;
    }
  });
};

module.exports = Estudiante;
