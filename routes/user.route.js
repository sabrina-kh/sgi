const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  addUser,
  updateUser,
  getClientList,
} = require("../controllers/user.controller");
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");

const router = express.Router();

// register admin
router.post(
  "/register",
  [
    check("firstName").not().isEmpty().withMessage("Prénom obligatoire!"),
    check("lastName").not().isEmpty().withMessage("Nom obligatoire!"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email obligatoire!")
      .isEmail()
      .withMessage("Faux format d'email!"),
    check("company")
      .not()
      .isEmpty()
      .withMessage("Nom de la société obligatoire!"),
    check("userType")
      .not()
      .isEmpty()
      .withMessage("veuillez spécifier le type d'utilisateur!")
      .isIn(["ADMIN"])
      .withMessage("Type d'utilisateur introuvable"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Mot de passe obligatoire!")
      .isLength({ min: 6, max: 15 })
      .withMessage("Mot de passe doit contenir entre 6 et 15 caractéres!"),
  ],
  registerUser
);

// add responsble by admin
router.post(
  "/add",
  [
    auth,
    [
      check("firstName").not().isEmpty().withMessage("Prénom obligatoire!"),
      check("lastName").not().isEmpty().withMessage("Nom obligatoire!"),
      check("email")
        .not()
        .isEmpty()
        .withMessage("Email obligatoire!")
        .isEmail()
        .withMessage("Faux format d'email!"),
      check("company")
        .not()
        .isEmpty()
        .withMessage("Nom de la société obligatoire!"),
      check("userType")
        .not()
        .isEmpty()
        .withMessage("veuillez spécifier le type d'utilisateur!")
        .isIn(["CLIENT", "RESP_STOCK", "RESP_VENTE", "RESP_REGLEMENT", "ADMIN"])
        .withMessage("Type d'utilisateur introuvable"),
      check("password")
        .not()
        .isEmpty()
        .withMessage("Mot de passe obligatoire!")
        .isLength({ min: 6, max: 15 })
        .withMessage("Mot de passe doit contenir entre 6 et 15 caractéres!"),
    ],
  ],
  addUser
);

// login
router.post(
  "/login",
  [
    check("email").not().isEmpty().withMessage("Email obligatoire!"),

    check("password").not().isEmpty().withMessage("Mot de passe obligatoire!"),
  ],
  loginUser
);

router.get("/", auth, getUser);
router.get("/client_list", auth, getClientList)

router.put('/:userId', auth, updateUser)

module.exports = router;
