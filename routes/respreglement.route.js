const express = require("express");
const { getrespReglementList } = require("../controllers/respreglement.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getrespReglementList);
module.exports = router