const { check } = require('express-validator');

const loginValidation = [
	check('email')
		.not()
		.isEmpty()
		.withMessage('Email obligatoire!'),
	check('password')
		.not()
		.isEmpty()
		.withMessage('Mot de passe obligatoire!')
];

module.exports = { loginValidation };
