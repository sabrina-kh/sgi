const { check } = require('express-validator')

const articleValidation = [
  check('designation').not().isEmpty().withMessage('Champ obligatoire! Veuillez saisir la désignation de l\'article'),
  
]

module.exports = articleValidation
