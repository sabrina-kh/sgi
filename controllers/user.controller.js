const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/user.model');
const {
	BAD_REQUEST,
	UNAUTHORIZED,
	INTERNAL_SERVER_ERROR,
	NOT_FOUND,
} = require('http-status');
const {
	CLIENT,
	RESP_VENTE,
	ADMIN,
	RESP_STOCK,
	RESP_REGLEMENT,
} = require('../utils/constants');
const { findOne } = require('../models/user.model');
const Client = require('../models/client.model');
const RespStock = require('../models/respStock.model');
const RespVente = require('../models/respVente.model');
const RespReglement = require('../models/respReglement.model');

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

		let admins = await User.find({ userType: ADMIN })
		if (admins?.length >= 1) {
			return res
				.status(BAD_REQUEST)
				.json({ errors: [{ msg: 'Un seul admin est permis!' }] });
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
		jwt.sign(payload, 'secret', { expiresIn: 1000*60*60*2 }, (error, token) => {
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
			return res.status(UNAUTHORIZED).json({ errors: [{ msg: "Action inerdite! Uniquement l/'administrateur posséde ce droit " }] });
		}

		if (userType == ADMIN) {
			return res.status(UNAUTHORIZED).json({ errors: [{ msg: "Action interdite! Un seul administrateur est permis " }] });
		}

		let user = await User.findOne({ email })
		if (user) {
			return res.status(BAD_REQUEST).json({ errors: [{ msg: "Utilisateur Existant!" }] })
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

		if (userType == CLIENT) {
			let client = new Client({
				user: responsable._id,
				firstName: responsable.firstName,
				lastName: responsable.lastName,
				email: responsable.email,
				company: responsable.company,
				password: responsable.password,
				userType: CLIENT
			});
			await client.save()
		} 

		if (userType == RESP_STOCK) {
			let respStock = new RespStock({
				user: responsable._id,
				firstName: responsable.firstName,
				lastName: responsable.lastName,
				email: responsable.email,
				company: responsable.company,
				password: responsable.password,
				userType: RESP_STOCK,
			});
			await respStock.save();
		} 

		if (userType == RESP_VENTE) {
			let respVente = new RespVente({
				user: responsable._id,
				firstName: responsable.firstName,
				lastName: responsable.lastName,
				email: responsable.email,
				company: responsable.company,
				password: responsable.password,
				userType: RESP_VENTE,
			});
			await respVente.save();
		}

		if (responsable?.userType == RESP_REGLEMENT) {
			let respReglement = new RespReglement({
				user: responsable._id,
				firstName: responsable.firstName,
				lastName: responsable.lastName,
				email: responsable.email,
				company: responsable.company,
				password: responsable.password,
				userType: RESP_REGLEMENT,
			});
			const salt = await bcrypt.genSalt(rounds);

			//hash user password
			respReglement.password = await bcrypt.hash(password, salt);
			await respReglement.save();
		}

		// encrypt password before saving in db
		// define salt
		const salt = await bcrypt.genSalt(rounds);

		//hash user password
		responsable.password = await bcrypt.hash(password, salt);

		// save new responsable in db
		await responsable.save()

		// return responsable data
		res.json(responsable)
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Nous avons pas pu se connecter au serveur !');
	}
};

// modifier user
const updateUser = async (req, res) => {
	const { firstName, lastName, email, company, password } = req.body;
	const userFields = {};
	if (firstName) userFields.firstName = firstName;
	if (lastName) userFields.lastName = lastName;
	if (email) userFields.email = email;
	if (company) userFields.company = company;
	if (password) userFields.password = password;

	try {
		let user = await User.findById(req.params.userId);
		if (!user) {
			return res.json({ error: 'Utilisateur non trouvé ' });
		}
		user = await User.findByIdAndUpdate(req.params.userId, { $set: userFields}, {
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

const getUserList = async (req, res) => {
	try {
		const users = await User.find()
		res.json(users)
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Nous avons pas pu se connecter au serveur !');
	}
}


module.exports = {
	registerUser,
	loginUser,
	getUser,
	addUser,
	updateUser,
	getClientList,
	getUserList
};
