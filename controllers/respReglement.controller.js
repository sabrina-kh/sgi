const express = require("express");
const res = require("express/lib/response");
const RespReglement = require("../models/respReglement.model");


const getrespReglementList = async (req,res) => {
    try {
         const respReglementList= await RespReglement.find().populate('user','userType')
        res.json(respReglementList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
//////
const getRespReglementById = async (req,res) => {
    try {
        const respstock = await RespReglement.findById(req.params.respreglementId).populate('user','userType')
res.json(respreglement)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}
/// delete RespReglement
const deleteRespReglement = async (req,res) => {
    try {
        let respreglement = await RespReglement.findById(req.params.respreglementId)
        if (!respreglement ) {
            return res.json({error: "responsable de reglement  introuvable "});
        }

        respreglement = await RespReglement.findByIdAndRemove(req.params.respreglementId)
        res.json({message: " Responsable supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
module.exports={getrespReglementList,getRespReglementById,deleteRespReglement}