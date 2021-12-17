//const { Router } = require('express');
const express = require("express")
const router = express.Router()
const controller = require("../controller/doadoresController")


router.get("/", controller.getAllDoador)
router.post("/", controller.postDoador)
router.get("/:id", controller.getDoadorId)
router.delete("/:id", controller.deleteDoador)
router.put("/:id", controller.updateDoador)

module.exports = router;

