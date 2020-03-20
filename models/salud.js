const db = require("./db_connection.js");
const salud = function(salud) {
  this.id_salud = salud.id_salud;
  this.sangre = salud.sangre;
  this.alergia = salud.alergia;
  this.numeroSeguro = salud.numeroSeguro;
};

salud.addSalud = (body, result) => {
  db.query(
    "INSERT INTO salud (sangre, alergia, numeroSeguro) values(?,?,?)",
    [body.sangre, body.alergia, body.numeroSeguro],
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

// salud.getSalud = function(res) {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT MAX(id_salud) as id_salud FROM salud", function(err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res[0].id_salud);
//       }
//     });
//   });
// };

// salud.getSalud = function(res) {
//   this.id_salud = 1;
//   db.query("SELECT MAX(id_salud) as id_salud FROM salud", function(err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       this.id_salud = res[0].id_salud;
//     }
//   });
//   return this.id_salud;
// };

let body;

salud.setBody = body1 => {
  body = body1;
};

let res1;

const id_persona = (err, res2) => {
  if (err) {
    console.log(err);
  } else {
    db.query(
      "Insert into estudiante(curp, estatus, id_estado, id_salud, id_persona, id_academico, id_tutor) values(?, ?, ?, ?, ?, ?, ?)",
      [
        body.curp,
        body.estatus,
        body.id_estado,
        res1,
        res2[0].id_persona,
        body.id_academico,
        body.id_tutor
      ],
      function(err, res) {
        if (err) {
          console.log("error: ", err);
          jason.json({ response: "Error", msg: err });
        } else {
          jason.json({ response: res, msg: "200" });
        }
      }
    );
  }
};

const id_salud = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res1 = res[0].id_salud;
    db.query("Select MAX(id_persona) as id_persona from persona", id_persona);
  }
};
let jason;
salud.getSalud = function(res) {
  jason = res;
  db.query("SELECT MAX(id_salud) as id_salud FROM salud", id_salud);
};

module.exports = salud;
