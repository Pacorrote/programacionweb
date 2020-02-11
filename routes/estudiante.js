let express = require("express");
let router = express.Router();

router.get("/listar/:id/:nombre", function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  res.render("index", { title: "Listar" + id });
});

router.post("/nuevo", function(req, res, next) {
  res.render("index", { title: "Nuevo" });
  res.json({ response: "ok" });
});

router.put("/actualizar", function(req, res, next) {
  //   res.render("index", { title: "Actualizar" });
  let id = req.body.id;
  let nombre = req.body.nombre;
  console.log(id);
  res.json({ id: id, message: "Se ha actualizado el dato" });
});

router.delete("/borrar", function(req, res, next) {
  //   res.render("index", { title: "Borrar" });
  let id = req.body.id;
  let nombre = req.body.nombre;
  console.log(id);
  res.json({ id: id, message: "Se ha borrado el dato" });
});

module.export = router;
