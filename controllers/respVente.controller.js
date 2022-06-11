const express = require("express");
const res = require("express/lib/response");
const RespVente = require("../models/respVente.model");


const getrespVenteList = async (req,res) => {
    try {
         const respVenteList= await RespVente.find().populate('user','userType')
        res.json(respVenteList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
// resp by id
const getRespVenteById = async (req,res) => {
    try {
        const respvente = await RespVente.findById(req.params.respventeId).populate('user','userType')
res.json(respvente)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}
// delete respvente
const deleteRespvente = async (req,res) => {
    try {
        let respvente = await RespVente.findById(req.params.respventeId)
        if (!respvente) {
            return res.json({error: "responsable de vente introuvable "});
        }

        respvente = await Respvente.findByIdAndRemove(req.params.respventeId)
        res.json({message: " Responsable supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

module.exports={getrespVenteList,getRespVenteById,deleteRespvente}