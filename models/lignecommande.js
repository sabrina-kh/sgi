const { model, Schema } = require("mongoose")

const LignecommandeSchema = new Schema({
    respvente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    quantité: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    
},{
    timestamps:true 
})

const lignecommande = model("lignecommande", LignecommandeSchema)
module.exports = lignecommande
