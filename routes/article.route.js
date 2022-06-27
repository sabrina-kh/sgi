const express = require("express");
const auth = require("../middlewares/auth");
const {
  addArticle, getArticleList, getArticleById, deleteArticle, updateArticle,
} = require("../controllers/article.controller");
const { articleValidation } = require("../validations/article_validations/article.validation");

const router = express.Router();

router.post("/", [auth, articleValidation], addArticle);
router.get("/", auth, getArticleList);
router.get("/:articleId", auth, getArticleById);
router.delete("/:articleId", auth, deleteArticle);
router.put("/:articleId", auth, updateArticle);
//router.route('/').post(auth, addProduct)

//router.put("/pricing", auth, updateArticlePrice);

module.exports = router;
