const RespStock = require('../models/respStock.model');
const { RESP_STOCK, ADMIN } = require('../utils/constants');

const getRespStockList = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_STOCK
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable du stock!",
					},
				],
			});
		}
		const respStockList = await RespStock.find().populate('user', 'userType');
		res.status(OK).json(respStockList);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// resp by id
const getRespStockById = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_STOCK
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable du stock!",
					},
				],
			});
		}
		const respStock = await RespStock.findById(req.params.id);
		res.status(OK).json(respStock);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// delete respvente
const deleteRespStock = async (req, res) => {
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
		let respStock = await RespStock.findById(req.params.id);
		if (!respStock) {
			return res.status(NOT_FOUND).json({
				errors: [
					{
						msg: 'Responsable introuvable!',
					},
				],
			});
		}

		respStock = await RespStock.findByIdAndRemove(req.params.id);
		res.status(OK).json({ message: 'Responsable supprimé ' });
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports = { getRespStockList, getRespStockById, deleteRespStock };
