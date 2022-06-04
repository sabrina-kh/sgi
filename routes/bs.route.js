const express = require("express");
const { getBsById, getBsList, deleteBs } = require("../controllers/bs.controller");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", auth, getBsList);
router.get("/:bsId", auth, getBsById);
router.delete("/:bsId", auth, deleteBs);
module.exports = router