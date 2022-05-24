const { model, Schema } = require("mongoose")

const ModelivraisonSchema = new Schema({
    respstock: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    codemodelivraison: {
        type: Number,
        required: true
    },
    
},{
    timestamps:true 
})

const Modelivraison = model("modelivraison", ModelivraisonSchema)
module.exports = modelivraison
