const { model, Schema } = require("mongoose")

const ModepaiementSchema = new Schema({
    respvente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    codemodepaiement: {
        type: Number,
        required: true
    },
    
},{
    timestamps:true 
})

const modepaiement= model("modepaiement", ModepaiementSchema)
module.exports = modepaiement
