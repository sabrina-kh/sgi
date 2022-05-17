const express = require("express");
const { deleteRespstock } = require("../controllers/respstock.controller");
const { getrespVenteList, deleteRespvente, getRespVenteById } = require("../controllers/respvente.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespVenteList);
router.get("/:respventeId", auth, getRespVenteById);
router.delete("/:respventeId", auth, deleteRespvente);
module.exports = router