const express = require("express");
const { deleteModelivraison, getModelivraisonById, getModelivraisonList } = require("../controllers/modelivraison.controller");

const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getModelivraisonList);
router.get("/:modelivraisonId", auth, getModelivraisonById);
router.delete("/:modelivraisonId", auth, deleteModelivraison);
module.exports = router