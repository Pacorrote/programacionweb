const express = require("express");
const router = express.Router();
const estadoModel = require("../models/estado");

router.get("/", (req, res, next)=>{
    estadoModel.getEstado((err, result)=>{
        console.log("/")
        if(err){
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
    })
})

module.exports = router;