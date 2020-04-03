const express = require("express");
const router = express.Router();
const sexoModel = require("../models/sexo.js");

router.get("/", function(req, res, next) {
  sexoModel.getSexo((err, result) => {
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
});

module.exports = router;
