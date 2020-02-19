const express = require("express");
const router = express.Router();

const estudianteModel = require("../models/estudiante.js");
/* GET home page. */
router.get("/", function(req, res, next) {
  estudianteModel.getEstudiantes(function(err, result) {
    console.log("/");
    if (err) {
      res.json({
        response: "Error",
        msg: err
      });
    }
    console.log("res", result);
    res.json({
      response: result,
      msg: "200"
    });
  });
  // res.render("index", { title: "Express" });
});

router.get("/listar/:nombre", function(req, res, next) {
  let nombre = req.params.nombre;
  console.log("/listar" + " dato: " + nombre);
  estudianteModel.getEstudianteNombre(nombre, function(err, result) {
    if (err) {
      res.json({
        response: "Error",
        msg: err
      });
    }
    console.log("res", result);
    res.json({
      response: result,
      msg: "200"
    });
  });
});

router.post("/nuevo", function(req, res, next) {
  //res.render('index', { title: 'Nuevo' });
  res.json({ response: "Ok" });
});

router.put("/actualizar", function(req, res, next) {
  // res.render('index', { title: 'Actualizar' });
  let id = req.body.id;
  let nombre = req.body.nombre;
  console.log(id);
  res.json({ id: id, message: "Se ha actualizado el dato" });
});

router.delete("/borrar", function(req, res, next) {
  //res.render('index', { title: 'Borrar' });
  let id = req.body.id;
  console.log(id);
  res.json({ id: id, message: "Se ha borrado el dato" });
});
//   DOCKER > Agregar una imagen con
// NODEJS,
//     EXPRESS,
//    MongoDB /Postgresql

module.exports = router;
