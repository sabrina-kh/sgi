const { model, Schema } = require("mongoose")

const CommandeSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    codeCom: {
        type: String,
        required: true,
        unique: true
    },
    numCom: {
        type: String,
        required: true,
        unique: true
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
