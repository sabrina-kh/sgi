const express = require("express")

const User = require("../models/user.model")

// register
export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, userType } = req.body
    try {
        var user = await User.find({ email: email })
        if (user) {
            res.json({ error: "Utilisateur existant!" })
        }

        user = new User({
            firstName, lastName, email, password, userType
        })

       await user.save()
       res.json(user)

    } catch (error) {

    }
}
