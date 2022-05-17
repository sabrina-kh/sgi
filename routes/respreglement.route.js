const express = require("express");
const { getrespReglementList, deleteRespReglement, getRespReglementById } = require("../controllers/respreglement.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespReglementList);
router.get("/:respreglementId", auth, getRespReglementById);
router.delete("/:respreglementId", auth, deleteRespReglement);
module.exports = router