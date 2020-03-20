const db = require("./db_connection.js");

const direccion = function(direccion) {
  this.id_direccion = direccion.id_direccion;
  this.calle = estudiante.calle;
  this.colonia = estudiante.colonia;
  this.municipio = estudiante.municipio;
  this.estado = estudiante.estado;
  this.pais = estudiante.pais;
  this.codigoPostal = estudiante.codigoPostal;
};

direccion.addDireccion = function(body, result) {
  db.query(
    "INSERT INTO direccion(calle, colonia, municipio, estado, pais, codigoPostal) values(?,?,?,?,?,?)",
    [
      body.calle,
      body.colonia,
      body.municipio,
      body.estado,
      body.pais,
      body.codigoPostal
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

direccion.getDireccion = function(funcion) {
  funcion();
};
module.exports = direccion;
