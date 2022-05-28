const { model, Schema } = require("mongoose")

const ModeLivraisonSchema = new Schema({
    respStock: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    codeModeLivraison: {
        type: Number,
        required: true,
        default: 0
    },
    
},{
    timestamps:true 
})

const ModeLivraison = model("modeLivraison", ModeLivraisonSchema)
module.exports = ModeLivraison
