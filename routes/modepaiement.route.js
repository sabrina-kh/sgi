const express = require("express");
const { deleteModepaiement, getModepaiementById, getModepaiementList } = require("../controllers/modepaiement.controller");


const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getModepaiementList);
router.get("/:modepaiementId", auth, getModepaiementById);
router.delete("/:modepaiementId", auth, deleteModepaiement);
module.exports = router