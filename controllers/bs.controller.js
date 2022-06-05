const express = require("express");
const res = require("express/lib/response");
const { UNAUTHORIZED } = require("http-status");
const Bs = require("../models/client.model");
const User = require("../models/user.model");
const { RESP_STOCK, CLIENT } = require("../utils/constants");

// afficher liste des bs
const getBsList = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== RESP_STOCK) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
    const bsList = await Bs.find().populate("respStock", "userType");
    res.json(bsList);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// afficher un bs par id
const getBsById = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== RESP_STOCK) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
    const bs = await Bs.findById(req.params.bsId).populate(
      "respStock",
      "userType"
    );
    res.json(bs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// supprimer bs
const deleteBs = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    if (currentUser.userType !== CLIENT) {
      return res.status(UNAUTHORIZED).json({ message: "Non Autorisé" });
    }
    let bs = await Bs.findById(req.params.bsId);
    if (!bs) {
      return res.json({ error: "bs introuvable " });
    }

    bs = await Bs.findByIdAndRemove(req.params.bsId);
    res.json({ message: "bs supprimé " });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// modifier bs
const updateBs = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

module.exports = { getBsList, getBsById, deleteBs, updateBs };
