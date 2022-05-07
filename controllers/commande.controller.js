const express = require("express");
const Commande = require("../models/commande.model");

// creation commande
const createCommande = async (req,res) => {
  try {
      const commande = await Commande.find()
  } catch (error) {
      
  }
}
