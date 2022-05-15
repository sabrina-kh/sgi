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

module.exports={getrespReglementList}