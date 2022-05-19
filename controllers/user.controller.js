const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user.model");
const Client = require("../models/client.model");
const Respvente = require("../models/respvente.model");
const Respstock = require("../models/respstock.model");
const Respreglement = require("../models/respreglement.model");
const { BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR, NOT_FOUND } = require("http-status");
const { CLIENTS, CLIENT, RESP_VENTE, RESP_STOCK, RESP_REGLEMENT } = require("../utils/constants");

// bcryptjs configs
const rounds = 10;

// register
const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(BAD_REQUEST)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  const { firstName, lastName, email, password, company, userType } = req.body;
  try {
    // check if user with this email exists, throw error if it exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(BAD_REQUEST).json({ errors: [{ msg: 'Utilisateur déja existant!' }] });
    }
    // create new user
    user = new User({
      firstName,
      lastName,
      email,
      company,
      password,
     userType,
    });

    // encrypt password before saving in db
    // define salt
    const salt = await bcrypt.genSalt(rounds);

    //hash user password
    user.password = await bcrypt.hash(password, salt);

    // save new user in db
    
    await user.save()

    // implement json web token
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "secret", { expiresIn: "2h" }, (error, token) => {
      if (error) throw error;
      else res.json({ token });
    });

    // return user data
    //res.json(user)
    console.log(user)
  } catch (error) {
    console.error(error.message);
    res.status(INTERNAL_SERVER_ERROR).json({ errors: [{ msg: 'Erreur du serveur!' }] });
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
      return res.status(NOT_FOUND).json({ errors: [{ msg: 'Utilisateur non existant!' }] });
    }

    //check if password match
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(BAD_REQUEST).json({ errors: [{ msg: 'Faux mot de passe!' }] });
    }

    // implement json web token
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "secret", { expiresIn: "2h" }, (error, token) => {
      if (error) throw error;
      else res.json({ token });
    });

    // return user data
    //res.json(user)
    //console.log(user)
  } catch (error) {
    console.error(error.message);
    res.status(INTERNAL_SERVER_ERROR).json({ errors: [{ msg: 'Erreur du serveur!' }] });
  }
};
  
//get user data
const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password')
      res.json(user)
    } catch (error) {
      console.error(error.message);
      res.status(INTERNAL_SERVER_ERROR).json({ errors: [{ msg: 'Erreur du serveur!' }] });
    }
  };

// add user
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
    let user = await User.findById(req.user.id).populate('userType');
      if (user.userType !== 'ADMIN') {
        return res.status(UNAUTHORIZED).json({error: "Action inerdite! Uniquement l/'administrateur posséde ce droit "});
      }

      if (userType === 'ADMIN') {
        return res.json({error: "Action interdite! Un seul administrateur est permis "});
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

    if (userType === CLIENT) {
      let client = new Client({
        firstName,
        lastName,
        email,
        company,
        password,
        userType,
        user: req.user.id
      });

      await client.save()
    }

    if (userType === RESP_VENTE) {
      let respVente = new Respvente({
        firstName,
        lastName,
        email,
        company,
        password,
        userType,
        user: req.user.id
      });

      await respVente.save()
    }
    if (userType === RESP_STOCK) {
      let respStock = new Respstock({
        firstName,
        lastName,
        email,
        company,
        password,
        userType,
        user: req.user.id
      });

      await respStock.save()
    }
    if (userType === RESP_REGLEMENT) {
      let respReglement = new Respreglement({
        firstName,
        lastName,
        email,
        company,
        password,
        userType,
        
      });

      await respReglement
    }
    
    // encrypt password before saving in db
    // define salt
    const salt = await bcrypt.genSalt(rounds);

    //hash user password
    user.password = await bcrypt.hash(password, salt);

    // save new responsable in db
    await responsable.save()

    // return responsable data
    res.json(responsable)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

// modifier user
const updateUser = async (req,res) => {
  const { firstName, lastName, email } = req.body;
  const userFields = {}
if (firstName) userFields.firstName = firstName
if (lastName) userFields.lastName = lastName
if (email) userFields.email = email


  try {
    let user = await User.findById(req.params.userId)
    if(!user) {
      return res.json({error: "Utilisateur non trouvé "});
    }
    user = await User.findByIdAndUpdate(req.params.userId, userFields, { new: true })
   // await user.save()
    res.json(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !"); 
  }
}

module.exports = { registerUser, loginUser, getUser , addUser, updateUser };
