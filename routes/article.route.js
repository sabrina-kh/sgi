const express = require("express");
const auth = require("../middlewares/auth");
const {
  addArticle,
} = require("../controllers/article.controller");
const { articleValidation } = require("../validations/article_validations/article.validation");

const router = express.Router();

router.post("/", [auth, articleValidation], addArticle);
//router.route('/').post(auth, addProduct)

//router.put("/pricing", auth, updateArticlePrice);

module.exports = router;
