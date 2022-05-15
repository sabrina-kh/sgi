const { model, Schema } = require("mongoose")

const CommandeSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    lieuDeLivraison: {
        type: String,
        required: true,
       
    },
    numCom: {
        type: String,
        required: true,
        unique: true
    },
    prixHT:{
        type: Number,
        required: true,
        default: 0,
    },
    prixTOT:{
        type: Number,
        required: true,
        default: 0,

    },
    remise:{
        type: Number,
        required: true,
        default: 0,
    },

    isPassed: {
        type: Boolean,
        default: false
    }
},{
    timestamps:true 
})

const Commande = model("commande", CommandeSchema)
module.exports = Commande
