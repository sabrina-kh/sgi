const express = require("express");
const { deleteRespReglement, getRespReglementById, getRespReglementList } = require("../controllers/respReglement.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getRespReglementList);
router.get("/:id", auth, getRespReglementById);
router.delete("/:id", auth, deleteRespReglement);
module.exports = router