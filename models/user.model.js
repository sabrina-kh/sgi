const { model, Schema } = require("mongoose")

const userTypes = ['ADMIN', 'CLIENT', 'RESP_STOCK', 'RESP_VENTE','RESP_REGLEMENT']

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
        type: String,
       required: true,
       enum: userTypes,
        default:"ADMIN"
    },
    company:  {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min:6,
        max:15
    }
},{
    timestamps:true 
})

const User = model("user", UserSchema)
module.exports = User
