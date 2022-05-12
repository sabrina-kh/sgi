const { model, Schema } = require("mongoose")

const etatSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    commande: {
        type: Schema.Types.ObjectId,
        ref: 'commande'
    },
   
},{
    timestamps:true 
})

const etat = model("etat", etatSchema)
module.exports = etat
