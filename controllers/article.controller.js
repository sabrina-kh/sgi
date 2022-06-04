const express = require("express");
const crypto = require("crypto");
const Article = require("../models/article.model");
const User = require("../models/user.model");
const res = require("express/lib/response");
const { UNAUTHORIZED, NOT_FOUND } = require("http-status");
const { ADMIN, RESP_VENTE } = require("../utils/constants");

// add product
const addProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const codeProduct = crypto.randomBytes(4).toString("hex").toUpperCase();

    const newProduct = new Article({
      respVente: req.user.id,
      name,
      code: codeProduct,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};
// afficher liste des articles
const getArticleList = async (req, res) => {
  try {
    const articleList = await Article.find().populate("respVente", "userType");
    res.json(articleList);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};
// afficher un article par id
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId).populate(
      "user",
      "userType"
    );
    res.json(article);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};
// supprimer article
const deleteArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.articleId);
    if (!article) {
      return res.json({ error: "article introuvable " });
    }

    article = await Article.findByIdAndRemove(req.params.articleId);
    res.json({ message: "article supprimé " });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// modifier article
const updateArticle = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// modifier prix d'article
const updateArticlePrice = async (req, res) => {
  const { prix } = req.body;
  const priceObject = {};
  if (prix) priceObject.prix = prix;
  try {
    const currentUser = await User.findById(req.user.id);

    if (currentUser?.userType !== "ADMIN" || currentUser?.userType.toString() !== RESP_VENTE) {
      console.log(currentUser?.userType)
      return res
        .status(UNAUTHORIZED)
        .json({ message: "vous n'êtes pas autorisé" });
    }

    let article = await Article.findById(req.params.articleId);
    if (!article) {
      res.status(NOT_FOUND).json({ message: "Article non trouvé" });
    }

    article = await Article.findByIdAndUpdate(
      req.params.articleId,
      { $set: priceObject },
      { new: true }
    );
    res.json(article);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

module.exports = {
  addProduct,
  getArticleList,
  getArticleById,
  deleteArticle,
  updateArticlePrice,
};
