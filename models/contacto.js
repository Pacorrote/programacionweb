const db = require("./db_connection.js");
const direccionModel = require("./direccion");

const contacto = function(contacto) {
  this.id_contacto = contacto.id_contacto;
  this.telefono = contacto.telefono;
  this.email = contacto.email;
  this.celular = contacto.celular;
};

contacto.addContacto = function(body, result) {
  db.query(
    "INSERT INTO contacto (telefono, email, celular) values(?,?,?)",
    [body.telefono, body.email, body.celular],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        //result(err, null);
      } else {
        id_contacto = res.insertId;
      }
    }
  );

  //   db.query(
  //     "INSERT INTO dire (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );

  //   db.query(
  //     "INSERT INTO salud (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );

  //   db.query(
  //     "INSERT INTO estudiante (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );
};

contacto.getContacto = function(body) {
  db.query("SELECT MAX(id_contacto) as id_contacto FROM contacto", function(
    err,
    res1
  ) {
    if (err) {
      console.log("error: ", err);
    } else {
      direccionModel.getDireccion(() => {
        db.query(
          "SELECT MAX(id_direccion) as id_direccion FROM direccion",
          (err, res2) => {
            if (err) {
              console.log("error: ", err);
            } else {
              db.query(
                "Insert into persona (nombre, apellidoPat, apellidoMat, sexo, id_contacto, id_direccion) values(?, ?, ?, ?, ?, ?)",
                [
                  body.nombre,
                  body.apellidoPat,
                  body.apellidoMat,
                  body.sexo,
                  res1[0].id_contacto,
                  res2[0].id_direccion
                ],
                function(err, res) {
                  if (err) {
                    console.log("error: ", err);
                  }
                }
              );
            }
          }
        );
      });
    }
  });
  return this.id_contacto;
};
module.exports = contacto;
