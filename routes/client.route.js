const express = require("express");
const { getClientList } = require("../controllers/client.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getClientList);
module.exports = router