const express = require("express");
const res = require("express/lib/response");
const Respreglement = require("../models/respreglement.model");


const getrespReglementList = async (req,res) => {
    try {
         const respReglementList= await Respreglement.find().populate('user','userType')
        res.json(respReglementList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
//////
const getRespReglementById = async (req,res) => {
    try {
        const respstock = await Respreglement.findById(req.params.respreglementId).populate('user','userType')
res.json(respreglement)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}
/// delete RespReglement
const deleteRespReglement = async (req,res) => {
    try {
        let respreglement = await Respreglement.findById(req.params.respreglementId)
        if (!respreglement ) {
            return res.json({error: "responsable de reglement  introuvable "});
        }

        respreglement = await Respreglement.findByIdAndRemove(req.params.respreglementId)
        res.json({message: " Responsable supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
module.exports={getrespReglementList,getRespReglementById,deleteRespReglement}