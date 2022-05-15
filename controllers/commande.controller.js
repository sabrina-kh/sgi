const express = require("express");
const Commande = require("../models/commande.model");
const User = require("../models/user.model");

// creation commande
const createCommande = async (req,res) => {
  const { lieuDeLivraison }  = req.body
  try {
    let user = await User.findById(req.user.id).populate('userType');
    if (user.userType !== 'CLIENT') {
      return res.json({error: "Action inerdite! Uniquement le client posséde ce droit "});
    }

    let numCommande = await Commande.find().count()
    numCommande++

    let newCommande = new Commande({
      client: req.user.id,
      numCom: numCommande
    })

    const commande = await newCommande.save()

    res.json(commande)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
  }
}
