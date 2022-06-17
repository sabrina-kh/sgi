const { check } = require('express-validator');

const articleValidation = [
	check('prix').not().isEmpty().withMessage('Prix obligatoire!'),
	check('designation')
		.not()
		.isEmpty()
		.withMessage("Désignation du l'article obligatoire!"),
	check('degreEnfencement')
		.not()
		.isEmpty()
		.withMessage("Degré d'enfencement obligatoire!")
		.isNumeric()
		.withMessage("Degré d'enfencement doit être d'une valeur numérique!"),
	check('temperature')
		.not()
		.isEmpty()
		.withMessage('Température obligatoire!')
		.isNumeric()
		.withMessage("Température doit être d'une valeur numérique!"),
	check('tav')
		.not()
		.isEmpty()
		.withMessage('TAV obligatoire!')
		.isNumeric()
		.withMessage("TAV doit être d'une valeur numérique!"),
	check('densite')
		.not()
		.isEmpty()
		.withMessage('Densité obligatoire!')
		.isNumeric()
		.withMessage("Densité doit être d'une valeur numérique!"),
	check('coefficient')
		.not()
		.isEmpty()
		.withMessage('Coefficient obligatoire!')
		.isNumeric()
		.withMessage("Coefficient doit être d'une valeur numérique!"),
	check('quantity')
		.not()
		.isEmpty()
		.withMessage("Quantité obligatoire!")
		.isNumeric()
		.withMessage("Quantité doit être d'une valeur numérique!"),
];

module.exports = { articleValidation };
