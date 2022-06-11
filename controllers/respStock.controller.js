const express = require("express");
const res = require("express/lib/response");
const RespStock = require("../models/respStock.model");



const getrespStockList = async (req,res) => {
    try {
         const respStockList= await RespStock.find().populate('user','userType')
        res.json(respStockList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
//////
const getRespStockById = async (req,res) => {
    try {
        const respstock = await RespStock.findById(req.params.respstockId).populate('user','userType')
res.json(respstock)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// delete respstock
const deleteRespstock = async (req,res) => {
    try {
        let respstock = await RespStock.findById(req.params.respstockId)
        if (!respstock ) {
            return res.json({error: "responsable de stock  introuvable "});
        }

        respstock = await Respstock .findByIdAndRemove(req.params.respstockId)
        res.json({message: " Responsable supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}
module.exports={getrespStockList,getRespStockById,deleteRespstock }