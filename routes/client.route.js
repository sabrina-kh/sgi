const express = require("express");
const { getClientList, getClientById, deleteClient } = require("../controllers/client.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getClientList);
router.get("/:clientId", auth, getClientById);
router.delete("/:clientId", auth, deleteClient);
module.exports = router