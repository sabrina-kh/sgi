const { model, Schema } = require("mongoose")

const LigneCommandeSchema = new Schema({
    respvente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    prix: {
        type: Number,
        required: true,
        default: 0
    },
    
},{
    timestamps:true 
})

const LigneCommande = model("ligneCommande", LigneCommandeSchema)
module.exports = LigneCommande
