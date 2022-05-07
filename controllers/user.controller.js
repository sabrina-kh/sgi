const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user.model");

// bcryptjs configs
const rounds = 10;

// register
const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  const { firstName, lastName, email, password, userType, company } = req.body;
  try {
    // check if user with this email exists, throw error if it exists
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ error: "Utilisateur existant!" });
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
    //console.log(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};

//login user
const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  const { email, password } = req.body;
  try {
    // check if user with this email exists, throw error if it exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Utilisateur non existant!" });
    }

    //check if password match
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ error: "Fausse Mot de passe !" });
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
    res.status(500).send("Nous avons pas pu se connecter au serveur !");
  }
};
  
//get user data
const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password')
      res.json(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Nous avons pas pu se connecter au serveur !");
    }
  };


module.exports = { registerUser, loginUser, getUser };
