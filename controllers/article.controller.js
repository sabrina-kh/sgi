const express = require("express");
const crypto = require("crypto");
const Article = require("../models/article.model");
const User = require("../models/user.model");
const res = require("express/lib/response");
const { UNAUTHORIZED, NOT_FOUND } = require("http-status");
const { ADMIN, RESP_VENTE } = require("../utils/constants");

// add Article
const addArticle = async (req,res) => {
    const { name } = req.body;
  try {
    const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== RESP_STOCK) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
      const codeArticle= crypto.randomBytes(4).toString('hex').toUpperCase()

      const newArticle = new Article({
          respVente: req.user.id,
          name,
          code: codeArticle
      })

      const article = await newArticle.save()
      res.json(article)
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
    const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== RESP_STOCK) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
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

module.exports = { addArticle, getArticleList, getArticleById, deleteArticle }
