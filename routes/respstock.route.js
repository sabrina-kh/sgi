const express = require("express");
const { getrespStockList } = require("../controllers/respstock.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespStockList);
module.exports = router