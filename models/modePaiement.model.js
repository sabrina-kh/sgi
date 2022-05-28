const { model, Schema } = require("mongoose")

const ModePaiementSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    codeModePaiement: {
        type: Number,
        required: true,
        default: 0
    },
    
},{
    timestamps:true 
})

const ModePaiement= model("modePaiement", ModePaiementSchema)
module.exports = ModePaiement
