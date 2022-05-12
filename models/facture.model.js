const { model, Schema } = require("mongoose")

const factureSchema = new Schema({
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

const facture = model("facture", factureSchema)
module.exports = facture
