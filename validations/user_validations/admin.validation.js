const { check } = require("express-validator");

const adminValidation = [
	check('firstName').not().isEmpty().withMessage('Prénom obligatoire!'),
	check('lastName').not().isEmpty().withMessage('Nom obligatoire!'),
	check('email')
		.not()
		.isEmpty()
		.withMessage('Email obligatoire!')
		.isEmail()
		.withMessage("Faux format d'email!"),
	check('company')
		.not()
		.isEmpty()
		.withMessage('Nom de la société obligatoire!'),
	/* check('userType')
		.isIn(['ADMIN'])
		.withMessage("Type d'utilisateur introuvable"), */
	check('password')
		.not()
		.isEmpty()
		.withMessage('Mot de passe obligatoire!')
		.isLength({ min: 6, max: 15 })
		.withMessage('Mot de passe doit contenir entre 6 et 15 caractéres!'),
];

module.exports = { adminValidation }