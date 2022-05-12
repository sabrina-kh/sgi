const express = require("express");
const crypto = require('crypto');
const Article = require("../models/article.model");

// add product
const addProduct = async (req,res) => {
    const { name } = req.body;
  try {
      const codeProduct = crypto.randomBytes(4).toString('hex').toUpperCase()

      const newProduct = new Article({
          respVente: req.user.id,
          name,
          code: codeProduct
      })

      const product = await newProduct.save()
      res.json(product)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
}

module.exports = { addProduct }
