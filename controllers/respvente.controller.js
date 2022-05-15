const express = require("express");
const res = require("express/lib/response");
const Respvente = require("../models/respvente.model");


const getrespVenteList = async (req,res) => {
    try {
         const respVenteList= await Respvente.find().populate('user','userType')
        res.json(respVenteList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

module.exports={getrespVenteList}