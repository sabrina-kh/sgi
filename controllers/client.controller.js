const express = require("express");
const res = require("express/lib/response");
const Client = require("../models/client.model");

// afficher liste des clients
const getClientList = async (req,res) => {
    try {
         const clientList = await Client.find().populate('user','userType')
        res.json(clientList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// afficher un client par id
const getClientById = async (req,res) => {
    try {
        const client = await Client.findById(req.params.clientId).populate('user','userType')
res.json(client)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
}

// supprimer client 
const deleteClient = async (req,res) => {
    try {
        let client = await Client.findById(req.params.clientId)
        if (!client) {
            return res.json({error: "client introuvable "});
        }

        client = await Client.findByIdAndRemove(req.params.clientId)
        res.json({message: "client supprimé "})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

// modifier client 
const updateClient = async (req,res) => {
    
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
    }
}

module.exports={getClientList, getClientById, deleteClient}