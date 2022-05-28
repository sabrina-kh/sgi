const express = require("express");
const res = require("express/lib/response");
const Bs = require("../models/client.model");

// afficher liste des bs
const getBsList = async (req,res) => {
    try {
         const bsList = await Bs.find().populate('respStock','userType')
        res.json(bsList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher un bs par id
const getBsById = async (req,res) => {
    try {
        const bs = await Bs.findById(req.params.bsId).populate('respStock','userType')
res.json(bs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer bs 
const deleteBs = async (req,res) => {
    try {
        let bs = await Bs.findById(req.params.bsId)
        if (!bs) {
            return res.json({error: "bs introuvable "});
        }

        bs = await Bs.findByIdAndRemove(req.params.bsId)
        res.json({message: "bs supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier bs
const updateBs = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getBsList, getBsById, deleteBs,updateBs}