const { model, Schema } = require("mongoose")

const FactureSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    numfact: {
        type: String,
        required: true,
        unique: true
    },
},{
    timestamps:true 
})

const Facture = model("facture", FactureSchema)
module.exports = Facture
