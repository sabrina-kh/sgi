const express = require("express");
const { getrespStockList, deleteRespstock, getRespStockById } = require("../controllers/respstock.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespStockList);
router.get("/:respstockId", auth, getRespStockById);
router.delete("/:respstockId", auth, deleteRespstock);
module.exports = router