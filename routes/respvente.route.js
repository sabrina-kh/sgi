const express = require("express");
const { getrespVenteList } = require("../controllers/respvente.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespVenteList);
module.exports = router