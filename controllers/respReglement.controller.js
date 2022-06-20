const express = require("express");
const res = require("express/lib/response");
const RespReglement = require("../models/respReglement.model");
const { ADMIN, RESP_REGLEMENT } = require("../utils/constants");


const getRespReglementList = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_REGLEMENT
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable du règlement!",
					},
				],
			});
		}
		const respReglementList = await RespReglement.find().populate('user', 'userType');
		res.status(OK).json(respReglementList);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// resp by id
const getRespReglementById = async (req, res) => {
	try {
		let currentUser = await User.findById(req.user.id);
		if (
			currentUser?.userType !== ADMIN &&
			currentUser?.userType !== RESP_REGLEMENT
		) {
			return res.status(FORBIDDEN).json({
				errors: [
					{
						msg: "Requête réservée uniquement `a l'administrateur ou le responsable du règlement!",
					},
				],
			});
		}
		const respReglement = await RespReglement.findById(req.params.id);
		res.status(OK).json(respReglement);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};
// delete respvente
const deleteRespReglement = async (req, res) => {
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
		let respReglement = await RespReglement.findById(req.params.id);
		if (!respReglement) {
			return res.status(NOT_FOUND).json({
				errors: [
					{
						msg: 'Responsable introuvable!',
					},
				],
			});
		}

		respReglement = await RespReglement.findByIdAndRemove(req.params.id);
		res.status(OK).json({ message: 'Responsable supprimé ' });
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports={getRespReglementList,getRespReglementById,deleteRespReglement}