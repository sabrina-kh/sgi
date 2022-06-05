const express = require("express");
const res = require("express/lib/response");
const Facture = require("../models/facture.model");
const { RESP_REGLEMENT } = require("../utils/constants");

// afficher liste des Factures
const getFactureList = async (req,res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        if (currentUser.userType !== RESP_REGLEMENT) {
          return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
        }
         const factureList = await Facture.find().populate('respVente','userType')
        res.json(factureList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher une Facture par id
const getFactureById = async (req,res) => {
    try {
        const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== RESP_REGLEMENT) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
        const facture = await Facture.findById(req.params.factureId).populate('respVente','userType')
res.json(facture)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer Facture
const deleteFacture = async (req,res) => {
    try {
        let facture = await Facture.findById(req.params.factureId)
        if (!facture) {
            return res.json({error: "Facture introuvable "});
        }

        facture= await Facture.findByIdAndRemove(req.params.factureId)
        res.json({message: "Facture supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier Facture
const updateFacture = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getFactureList, getFactureById, deleteFacture,updateFacture}