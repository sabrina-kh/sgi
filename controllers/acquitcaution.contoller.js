const express = require("express");
const res = require("express/lib/response");
const Acquitcaution = require("../models/acquitcaution.model");

// afficher liste des Acquitcautions
const getAcquitCautionList = async (req,res) => {
    try {
         const acquitcautionList = await Acquitcaution.find().populate('respReglement','userType')
        res.json(acquitcautionList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher un Acquitcaution par id
const getAcquitcautionById = async (req,res) => {
    try {
        const acquitcaution = await Acquitcaution.findById(req.params.acquitcautionId).populate('respVente','userType')
res.json(acquitcaution)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer client 
const deleteAcquitcaution = async (req,res) => {
    try {
        let acquitcaution = await Acquitcaution.findById(req.params.acquitcautionId)
        if (!acquitcaution) {
            return res.json({error: "Acquit a caution introuvable "});
        }

        acquitcaution = await Acquitcaution.findByIdAndRemove(req.params.acquitcautionId)
        res.json({message: "Acquit a caution supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier client 
const updateAcquitcaution = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getAcquitCautionList, getAcquitcautionById, deleteAcquitcaution,updateAcquitcaution}