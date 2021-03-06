const { OK } = require('http-status');
const RespVente = require('../models/respVente.model');
const Client = require('../models/client.model');
const User = require('../models/user.model')
const { RESP_VENTE, ADMIN } = require('../utils/constants');

const getRespVenteList = async (req, res) => {
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
		const respVenteList = await RespVente.find().populate('user', 'userType');
		res.status(OK).json(respVenteList);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// resp by id
const getRespVenteById = async (req, res) => {
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
		const respVente = await RespVente.findById(req.params.id);
		res.status(OK).json(respVente);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// delete respvente
const deleteRespVente = async (req, res) => {
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
		let respVente = await RespVente.findById(req.params.id).populate('user', '_id');
		if (!respVente) {
			return res.status(NOT_FOUND).json({
				errors: [
					{
						msg: 'Responsable introuvable!',
					},
				],
			});
		}

		let associatedUser = await User.findOne({ _id: respVente.user?._id })

		respVente = await Client.findByIdAndRemove(req.params.id);
		associatedUser = await User.findOneAndRemove({ _id: respVente?.user?._id })
		res.status(OK).json({ message: 'Responsable supprimé ' });
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports = { getRespVenteList, getRespVenteById, deleteRespVente };
