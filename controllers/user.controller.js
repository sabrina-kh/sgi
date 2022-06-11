const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/user.model');
const Client = require('../models/client.model');
const Respvente = require('../models/respVente.model');
const Respstock = require('../models/respStock.model');
const Respreglement = require('../models/respReglement.model');
const {
	BAD_REQUEST,
	UNAUTHORIZED,
	INTERNAL_SERVER_ERROR,
	NOT_FOUND,
} = require('http-status');
const {
	CLIENTS,
	CLIENT,
	RESP_VENTE,
	RESP_STOCK,
	RESP_REGLEMENT,
	ADMIN,
} = require('../utils/constants');
const { findOne } = require('../models/user.model');
const RespVente = require('../models/respVente.model');

// bcryptjs configs
const rounds = 10;

// Créer un compte admin
const registerUser = async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res
			.status(BAD_REQUEST)
			.json({ errors: errors.array({ onlyFirstError: true }) });
	}
	const { firstName, lastName, email, password, company } = req.body;
	try {
		// check if user with this email exists, throw error if it exists
		let user = await User.findOne({ email });
		if (user) {
			return res
				.status(BAD_REQUEST)
				.json({ errors: [{ msg: 'Utilisateur déja existant!' }] });
		}
		// create new user
		user = new User({
			firstName,
			lastName,
			email,
			company,
			password,
		});

		// encrypt password before saving in db
		// define salt
		const salt = await bcrypt.genSalt(rounds);

		//hash user password
		user.password = await bcrypt.hash(password, salt);

		// save new user in db

		await user.save();

		// implement json web token
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(payload, 'secret', { expiresIn: '2h' }, (error, token) => {
			if (error) throw error;
			else {
				res.json({ token });
			}
		});
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.json({ errors: [{ msg: 'Erreur du serveur!' }] });
	}
};

//login user
const loginUser = async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res
			.status(BAD_REQUEST)
			.json({ errors: errors.array({ onlyFirstError: true }) });
	}
	const { email, password } = req.body;
	try {
		// check if user with this email exists, throw error if it exists
		let user = await User.findOne({ email });
		if (!user) {
			return res
				.status(NOT_FOUND)
				.json({ errors: [{ msg: 'Utilisateur non existant!' }] });
		}

		//check if password match
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res
				.status(BAD_REQUEST)
				.json({ errors: [{ msg: 'Faux mot de passe!' }] });
		}

		// implement json web token
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(payload, 'secret', { expiresIn: '2h' }, (error, token) => {
			if (error) throw error;
			else res.json({ token });
		});
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.json({ errors: [{ msg: 'Erreur du serveur!' }] });
	}
};

//get user data
const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res
			.status(INTERNAL_SERVER_ERROR)
			.json({ errors: [{ msg: 'Erreur du serveur!' }] });
	}
};

// créer un compte utilisateur
const addUser = async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res
			.status(BAD_REQUEST)
			.json({ errors: errors.array({ onlyFirstError: true }) });
	}
	const { firstName, lastName, email, password, company, userType } = req.body;
	try {
		// check if user with this email exists, throw error if it exists
		let currentUser = await User.findById(req.user.id).populate([
			'userType',
			'email',
		]);
		if (currentUser.userType !== 'ADMIN') {
			return res.status(UNAUTHORIZED).json({
				error:
					"Action inerdite! Uniquement l/'administrateur posséde ce droit ",
			});
		}

		if (userType === 'ADMIN') {
			return res.json({
				error: 'Action interdite! Un seul administrateur est permis ',
			});
		}

		// create new user
		let responsable = new User({
			firstName,
			lastName,
			email,
			company,
			password,
			userType,
		});

		if (responsable?.userType == CLIENT) {
			let userToCheck = await User.findOne({ email });
			if (userToCheck) {
				return res
					.status(BAD_REQUEST)
					.json({ errors: [{ msg: 'Utilisateur déja existant!' }] });
			}
			let client = new Client({
				...responsable,
				userType: CLIENT,
				user: req.user.id,
			});
			const salt = await bcrypt.genSalt(rounds);

			//hash user password
			client.password = await bcrypt.hash(password, salt);
			await client.save();
		}

		if (responsable?.userType == RESP_STOCK) {
			let userToCheck = await User.findOne({ email });
			if (userToCheck) {
				return res
					.status(BAD_REQUEST)
					.json({ errors: [{ msg: 'Utilisateur déja existant!' }] });
			}
			let respStock = new Client({
				...responsable,
				userType: RESP_STOCK,
				user: req.user.id,
			});
			const salt = await bcrypt.genSalt(rounds);

			//hash user password
			respStock.password = await bcrypt.hash(password, salt);
			await respStock.save();
		}

		if (responsable?.userType == RESP_VENTE) {
			let userToCheck = await User.findOne({ email });
			if (userToCheck) {
				return res
					.status(BAD_REQUEST)
					.json({ errors: [{ msg: 'Client déja existant!' }] });
			}
			let respVente = new RespVente({
				...responsable,
				userType: RESP_VENTE,
				user: req.user.id,
			});
			const salt = await bcrypt.genSalt(rounds);

			//hash user password
			respVente.password = await bcrypt.hash(password, salt);
			await respVente.save();
		}

		if (responsable?.userType == RESP_REGLEMENT) {
			let userToCheck = await User.findOne({ email });
			if (userToCheck) {
				return res
					.status(BAD_REQUEST)
					.json({ errors: [{ msg: 'Client déja existant!' }] });
			}
			let respReglement = new Client({
				...responsable,
				userType: RESP_REGLEMENT,
				user: req.user.id,
			});
			const salt = await bcrypt.genSalt(rounds);

			//hash user password
			respReglement.password = await bcrypt.hash(password, salt);
			await respReglement.save();
		}

		// encrypt password before saving in db
		// define salt
		//const salt = await bcrypt.genSalt(rounds);

		//hash user password
		//user.password = await bcrypt.hash(password, salt);

		// save new responsable in db
		//await responsable.save()

		// return responsable data
		//res.json(responsable)
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Nous avons pas pu se connecter au serveur !');
	}
};

// modifier user
const updateUser = async (req, res) => {
	const { firstName, lastName, email } = req.body;
	const userFields = {};
	if (firstName) userFields.firstName = firstName;
	if (lastName) userFields.lastName = lastName;
	if (email) userFields.email = email;

	try {
		let user = await User.findById(req.params.userId);
		if (!user) {
			return res.json({ error: 'Utilisateur non trouvé ' });
		}
		user = await User.findByIdAndUpdate(req.params.userId, userFields, {
			new: true,
		});
		// await user.save()
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Nous avons pas pu se connecter au serveur !');
	}
};

const getClientList = async (req, res) => {
	try {
		const currentUser = await User.findById(req.user.id).populate('userType');

		if (
			!currentUser &&
			(currentUser?.userType !== ADMIN || currentUser?.userType !== RESP_VENTE)
		) {
			console.log(currentUser);
			return res
				.status(UNAUTHORIZED)
				.json({ errors: [{ msg: 'Non autorisé!' }] });
		}

		console.log(currentUser);
		const clients = await User.find({ userType: CLIENT });
		res.json(clients);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Nous avons pas pu se connecter au serveur !');
	}
};

module.exports = {
	registerUser,
	loginUser,
	getUser,
	addUser,
	updateUser,
	getClientList,
};
