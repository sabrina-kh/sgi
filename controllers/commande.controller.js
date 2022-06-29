const express = require("express");
const { CREATED, INTERNAL_SERVER_ERROR, UNAUTHORIZED, OK, NOT_FOUND } = require("http-status");
const Commande = require("../models/commande.model");
const User = require("../models/user.model");
const Client = require('../models/client.model');
const { CLIENT, RESP_VENTE } = require("../utils/constants");

// creation commande
const createCommande = async (req, res) => {
  const {
		lieuDeLivraison,
		volume,
		nbFut,
		articles,
		modeLivraison,
		modePaiement,
    client
	} = req.body;
  try {
    let user = await User.findById(req.user.id).populate("userType");
    if (user?.userType !== CLIENT && user?.userType !== RESP_VENTE) {
			return res.json({
				error:
					'Action inerdite! Uniquement le client ou Responsable de vente posséde ce droit ',
			});
		}

    let numCommande = await Commande.find().count();
    numCommande++;

    let newCommande = new Commande({
      client: user?.userType === CLIENT ? req.user.id : client,
      numCom: numCommande,
      lieuDeLivraison,
      volume,
      nbFut,
      articles,
      modeLivraison,
      modePaiement,
    });

    const commande = await newCommande.save();

    res.status(CREATED).json(commande);
  } catch (error) {
    console.error(error.message);
    res.status(INTERNAL_SERVER_ERROR).send("Nous avons pas pu se connecter au serveur !");
  }
};

const getCommandeList = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).populate('userType');
		if (user?.userType !== RESP_VENTE) {
			return res.json({
				error:
					'Action inerdite! Uniquement le Responsable de vente posséde ce droit ',
			});
		}

    const commandeList = await Commande.find().populate('client', ['firstName', 'lastName']).populate('articles', 'designation')
    res.json(commandeList)
  } catch (error) {
    console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
  }
}

const getCommandeListOfCurrentClient = async (req, res) => {
	try {
		let user = await User.findById(req.user.id).populate('userType');
		if (user?.userType !== CLIENT) {
			return res.json({
				error:
					'Action inerdite! Uniquement le client ce droit ',
			});
		}

    let client = await Client.findOne({ user: req.user.id })

    if (req.user.id.toStrig() !== client.user.id.toString()) {
			return res.status(UNAUTHORIZED).json({
				error: 'Action inerdite! Uniquement le client ce droit ',
			});
		}

		const commandeList = await Commande.find({ client: client })
			.populate('client', ['firstName', 'lastName'])
			.populate('articles', 'designation');
		res.status(OK).json(commandeList);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

const validateCommande = async (req, res) => {
	const {
		lieuDeLivraison,
		volume,
		nbFut,
		articles,
		modeLivraison,
		modePaiement,
		client,
    remise,
    prixTOT,
    prixHT,
    isPassed
	} = req.body;

const commandeFields = {}
if (lieuDeLivraison) commandeFields.lieuDeLivraison = lieuDeLivraison
if (volume) commandeFields.volume = volume;
if (client) commandeFields.client = client;
if (nbFut) commandeFields.nbFut = nbFut;
if (modeLivraison) commandeFields.modeLivraison = modeLivraison;
if (modePaiement) commandeFields.modePaiement = modePaiement;
if (remise) commandeFields.remise = remise;
if (articles) commandeFields.articles = articles;
if (prixTOT) commandeFields.prixTOT = prixTOT;
if (prixHT) commandeFields.prixHT = prixHT;
if (isPassed) commandeFields.isPassed = isPassed;
	try {
		let user = await User.findById(req.user.id).populate('userType');
		if (user?.userType !== RESP_VENTE) {
			return res.status(UNAUTHORIZED).json({
				error:
					'Action inerdite! Uniquement le responsable de vente posséde ce droit ',
			});
		}

    let commande = await Commande.findById(req.params.commandeId)
    if (!commande) {
			return res.status(NOT_FOUND).json({
				error:
					'Commande non trouvée! ',
			});
		}

		let numCommande = await Commande.find().count();
		numCommande++;

		commandeFields.numCom = numCommande

		commande = await Commande.findOneAndUpdate({ _id: req.params.commandeId }, { $set: commandeFields }, { new: true } )

		res.status(OK).json(commande);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports = {
  createCommande,
  getCommandeList,
  getCommandeListOfCurrentClient
};
