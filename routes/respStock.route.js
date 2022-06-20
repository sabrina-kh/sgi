const express = require("express");
const { getRespStockById, getRespStockList, deleteRespStock } = require("../controllers/respStock.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getRespStockList);
router.get("/:id", auth, getRespStockById);
router.delete("/:id", auth, deleteRespStock);
module.exports = router