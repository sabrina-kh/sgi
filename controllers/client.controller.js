const express = require("express");
const res = require("express/lib/response");
const Client = require("../models/client.model");


const getClientList = async (req,res) => {
    try {
         const clientList = await Client.find().populate('user','userType')
        res.json(clientList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

module.exports={getClientList}