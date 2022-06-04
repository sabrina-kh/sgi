const express = require("express");
const res = require("express/lib/response");
const Modepaiement = require("../models/modepaiement.model");

// afficher  Modepaiement
const getModepaiementList = async (req,res) => {
    try {
         const modepaiementList = await Modepaiement.find().populate('respReglement','userType')
        res.json(modepaiementList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher  Modepaiement par id
const getModepaiementById = async (req,res) => {
    try {
        const modepaiement = await  Modepaiement.findById(req.params.modepaiementId).populate('respReglement','userType')
res.json(modepaiement)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer Modepaiement
const deleteModepaiement = async (req,res) => {
    try {
        let modepaiement = await Modepaiement.findById(req.params.modepaiementId)
        if (!modepaiement) {
            return res.json({error: "Modepaiement introuvable "});
        }

        modepaiement = await Modelivraison.findByIdAndRemove(req.params.modelivraisonId)
        res.json({message: "Modelivraison supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier Modepaiement
const updateModepaiement = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getModepaiementList, getModepaiementById, deleteModepaiement ,updateModepaiement }