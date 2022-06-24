const express = require('express')
const crypto = require('crypto')
const Article = require('../models/article.model')
const { CREATED, INTERNAL_SERVER_ERROR, OK, NOT_FOUND, UNAUTHORIZED } = require('http-status')
const { RESP_VENTE } = require('../utils/constants')

// add product
const addArticle = async (req, res) => {
  const {
    designation,
    prix,
    degreEnfencement,
    temperature,
    tav,
    densite,
    coefficient,
    quantity
  } = req.body

  try {
    const currentUser = await User.findById(req.user.id)

    if (currentUser?.userType?.toString() !== RESP_VENTE) {
      return res.status(UNAUTHORIZED).json({ errors: [{ msg: 'Accès interdit! Uniquement le responsable des ventes possède ce droit!' }] });
    }

    const codeProduct = crypto
      .randomBytes(4)
      .toString('hex')
      .toUpperCase()

    const newProduct = new Article({
      respVente: req.user.id,
      designation,
      prix,
      degreEnfencement,
      temperature,
      tav,
      densite,
      coefficient,
      quantity,
      code: codeProduct
    })

    const product = await newProduct.save()
    res.status(CREATED).json(product)
  } catch (error) {
    console.error(error.message)
    res
      .status(INTERNAL_SERVER_ERROR)
      .send('Nous avons pas pu se connecter au serveur !')
  }
}
// afficher liste des articles
const getArticleList = async (req, res) => {
  try {
    const articleList = await Article.find().populate('respVente', 'userType')
    res.send(OK).json(articleList)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Nous avons pas pu se connecter au serveur !')
  }
}
// afficher un article par id
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId).populate(
      'user',
      'userType'
    )
    res.status(OK).json(article)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Nous avons pas pu se connecter au serveur !')
  }
}
// supprimer article
const deleteArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.articleId)
    if (!article) {
      return res.status(NOT_FOUND).json({ error: 'article introuvable ' })
    }

    article = await Article.findByIdAndRemove(req.params.articleId)
    res.status(OK).json({ message: 'article supprimé ' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Nous avons pas pu se connecter au serveur !')
  }
}

// modifier article
const updateArticle = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Nous avons pas pu se connecter au serveur !')
  }
}

module.exports = {
  addArticle,
  getArticleList,
  getArticleById,
  deleteArticle,
  updateArticle
}
