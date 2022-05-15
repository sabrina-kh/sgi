const express = require("express");
const res = require("express/lib/response");
const Respstock = require("../models/respstock.model");



const getrespStockList = async (req,res) => {
    try {
         const respStockList= await Respstock.find().populate('user','userType')
        res.json(respStockList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Nous avons pas pu se connecter au serveur !");
        
    }
}

module.exports={getrespStockList}