const express = require("express");
const { deleteAcquitcaution, getAcquitcautionById, getAcquitcautionList } = require("../controllers/acquitcaution.contoller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getAcquitcautionList);
router.get("/:acquitcautionId", auth, getAcquitcautionById);
router.delete("/:acquitcautionId", auth, deleteAcquitcaution);
module.exports = router