const db = require("./db_connection.js");
const estado = function(estado) {
  this.id_estado = estado.id_estado;
  this.estadoDes = estado.id_estado;
};

estado.getEstado = resultado => {
  db.query("SELECT * FROM `estado`", function(err, res) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

module.exports = estado;
