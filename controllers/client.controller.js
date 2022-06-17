const {
	FORBIDDEN,
	OK,
	INTERNAL_SERVER_ERROR,
	NOT_FOUND,
} = require('http-status');
const Client = require('../models/client.model');
const User = require('../models/user.model');
const { ADMIN, RESP_VENTE } = require('../utils/constants');

// afficher liste des clients
const getClientList = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_VENTE
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable de vente!",
					},
				],
			});
		}
		const clientList = await Client.find().populate('user', 'userType');
		res.status(OK).json(clientList);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

// afficher un client par id
const getClientById = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_VENTE
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable de vente!",
					},
				],
			});
		}
		const client = await Client.findById(req.params.clientId);
		res.status(OK).json(client);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

// supprimer client
const deleteClient = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (currentUser?.userType !== ADMIN) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur !",
					},
				],
			});
		}
		let client = await Client.findById(req.params.clientId);
		if (!client) {
			return res.status(NOT_FOUND).json({
				errors: [
					{
						msg: 'Client introuvable!',
					},
				],
			});
		}

		client = await Client.findByIdAndRemove(req.params.clientId);
		res.status(OK).json({ message: 'client supprimé ' });
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports = { getClientList, getClientById, deleteClient };
