const express = require("express");
const router = express.Router();
const contacto = require("../models/contacto");
const direccion = require("../models/direccion");
const salud = require("../models/salud");

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
  contacto.addContacto(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    //res.json({ response: result, msg: "200" });
  });
  direccion.addDireccion(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    // res.json({ response: result, msg: "200" });
  });
  salud.addSalud(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    //res.json({ response: result, msg: "200" });
  });
  contacto.getContacto(req.body);
  salud.setBody(req.body);
  console.log("setBody");
  salud.getSalud(res);
});

router.put("/actualizar", function(req, res, next) {
  // res.render('index', { title: 'Actualizar' });
  console.log(
    "/nuevo" +
      " id: " +
      req.body.id_estudiante +
      " nombre: " +
      req.body.nombre +
      " apellido: " +
      req.body.apellido
  );
  estudianteModel.updateEstudiante(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    res.json({ response: result, msg: "200" });
  });
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
router.get("/Ordenar", function(req, res, next) {
  estudianteModel.getOrdenEstudiante(function(err, result) {
    console.log("/");

    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res ", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.get("/municipio", function(req, res, next) {
  estudianteModel.getMunicipio(function(err, result) {
    console.log("/");

    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res ", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.get("/promedio", function(req, res, next) {
  estudianteModel.getPromedio(function(err, result) {
    console.log("/");

    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res ", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.get("/escuela", function(req, res, next) {
  estudianteModel.getEscuela(function(err, result) {
    console.log("/");

    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res ", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.put("/actualizardireccion", function(req, res, next) {
  var direccion = {
    calle: req.body.calle,

    colonia: req.body.colonia,

    municipio: req.body.municipio,

    estado: req.body.estado,

    pais: req.body.pais,

    codigopostal: req.body.codigoPostal
  };

  console.log("/actualizar" + "id_estudiante" + req.body.id);

  estudianteModel.updatedireccion(direccion, req.body, function(err, result) {
    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.put("/eliminarestatus", function(req, res, next) {
  estudianteModel.updateEstatus(function(err, result) {
    if (err)
      res.json({
        response: "Error",

        msg: err
      });

    console.log("res", result);

    res.json({
      response: result,

      msg: "200"
    });
  });
});

router.get("/eliminarestudiante", function(req, res, next) {
  res.render("eliminarEstudiante", {
    title: "Eliminar estudiante por Estatus"
  });
});
router.get("/busqueda", function(req, res, next) {
  res.render("busqueda", { title: "Buscar estudiante" });
});
router.get("/insertarusuario", function(req, res, next) {
  res.render("insertarEstudiante", { title: "Buscar estudiante" });
});
router.get("/actualizarestudiante", function(req, res, next) {
  res.render("updateEstudiante", { title: "Buscar estudiante" });
});
router.get("/actualizadireccionestudiante", function(req, res, next) {
  res.render("updateDireccxestud", { title: "Buscar estudiante" });
});
module.exports = router;
