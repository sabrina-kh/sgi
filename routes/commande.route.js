const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/user.controller");
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");
const { createCommande } = require("../controllers/commande.controller");

const router = express.Router();

router.post(
  "/",
  [
    auth,
    [
      check("lieuDeLivraison")
        .not()
        .isEmpty()
        .withMessage("Lieu de livraison obligatoire!"),
      check("volume")
        .not()
        .isEmpty()
        .withMessage("Volume obligatoire!")
        .isNumeric()
        .withMessage("Volume doit être numérique!"),
      check("nbFut")
        .not()
        .isEmpty()
        .withMessage("Nombre de fut obligatoire!")
        .isNumeric()
        .withMessage("Nombre de fut doit être numérique!"),
    ],
  ],

  createCommande
);

module.exports = router;
