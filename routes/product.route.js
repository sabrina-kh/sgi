const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/user.controller");
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");
const { addProduct } = require("../controllers/product.controller");

const router = express.Router();

router.post(
  "/",
  auth,
  addProduct
);

module.exports = router;
