const express = require("express");
const res = require("express/lib/response");
const Modelivraison = require("../models/modelivraison.model");

// afficher  Modelivraison
const getModelivraisonList = async (req,res) => {
    try {
         const modelivraisonList = await Modelivraison.find().populate('respReglement','userType')
        res.json(modelivraisonList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher  Modelivraison par id
const getModelivraisonById = async (req,res) => {
    try {
        const modelivraison = await  Modelivraison.findById(req.params.modelivraisonId).populate('respReglement','userType')
res.json(modelivraison)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer Modelivraison
const deleteModelivraison = async (req,res) => {
    try {
        let modelivraison = await Modelivraison.findById(req.params.modelivraisonId)
        if (!modelivraison) {
            return res.json({error: "Modelivraison introuvable "});
        }

        modelivraison = await Modelivraison.findByIdAndRemove(req.params.modelivraisonId)
        res.json({message: "Modelivraison supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier Modelivraison
const updateModelivraison = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getModelivraisonList, getModelivraisonById, deleteModelivraison ,updateModelivraison }