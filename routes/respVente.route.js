const express = require("express");
const { getRespVenteById, getRespVenteList, deleteRespVente } = require("../controllers/respVente.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getRespVenteList);
router.get("/:id", auth, getRespVenteById);
router.delete("/:id", auth, deleteRespVente);
module.exports = router