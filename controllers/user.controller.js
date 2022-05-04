const express = require("express")
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken')

const User = require("../models/user.model")

// bcryptjs configs
const rounds = 10

// register
const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, userType } = req.body
    try {
        // check if user with this email exists, throw error if it exists
        let user = await User.findOne({ email })
        if (user) {
            return res.json({ error: "Utilisateur existant!" })
        }

        // create new user
        user = new User({
            firstName, lastName, email, password, userType
        })

        // encrypt password before saving in db
        // define salt
        const salt = await bcrypt.genSalt(rounds)

        //hash user password
        user.password = await bcrypt.hash(password, salt)


        // save new user in db
       //await user.save()

       // implement json web token
       const payload={
           user:{
               id:user.id
           }
       }
       jwt.sign(payload, "secret", { expiresIn: '2h' }, (error, token) => {
           if (error) throw error
           else res.json({ token })
       })

       // return user data
       //res.json(user)
       //console.log(user)

    } catch (error) {

    }
}

module.exports = { registerUser }
