const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/user.controller");
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");
const {
  addProduct,
  updateArticlePrice,
} = require("../controllers/article.controller");

const router = express.Router();

//router.post("/", auth, addProduct);
//router.route('/').post(auth, addProduct)

//router.put("/pricing", auth, updateArticlePrice);

module.exports = router;
