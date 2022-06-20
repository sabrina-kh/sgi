const { model, Schema } = require("mongoose")

const FactureSchema = new Schema({
    respReglement: {
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

const facture = model("facture", FactureSchema)
module.exports = facture
