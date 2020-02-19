const db = require("./db_connection.js");

const estudiante = function(estudiante) {
  this.id = estudiante.id;
  this.nombre = estudiante.nombre;
  this.apellido = estudiante.apellido;
};

estudiante.getEstudiantes = function(resultado) {
  db.query("Select * from estudiante", function(err, res) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

estudiante.getEstudiantesId = function(estudianteId, resultado) {
  db.query("Select * from estudiante ?", estudianteId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      return null;
    } else {
      return res;
    }
  });
};

estudiante.getEstudianteNombre = function(nombre, resultado) {
  db.query("Select * from estudiante where nombre like ?", nombre, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

module.exports = estudiante;
