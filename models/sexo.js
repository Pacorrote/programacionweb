const db = require("./db_connection.js");

const sexo = function(sexo) {
  this.sex = sexo.sex;
};

sexo.getSexo = function(resultado) {
  db.query("SELECT sexo FROM `persona` GROUP by sexo", function(err, res) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

module.exports = sexo;
