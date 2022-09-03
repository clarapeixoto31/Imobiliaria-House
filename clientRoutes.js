const express = require("express");
const router = express.Router();

const controllers = require("../controllers/clientControllers")

//DEMANDA: Ver todos os clientes cadastrados
router.get("/all", controllers.getAll)
router.post("/register", controllers.registerClient);

module.exports = router;