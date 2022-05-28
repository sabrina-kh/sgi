const { model, Schema } = require("mongoose")

const AcquitcautionSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    moyenTransport: {
        type: Date,
        required: true
    },
    schema: {
        type: String,
        required: true
    },
    dateSortie: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateAcquit: {
        type: Date,
        required: true,
        default: Date.now()
    },
    
},{
    timestamps:true 
})

const Acquitcaution = model("acquitcaution", AcquitcautionSchema)
module.exports = Acquitcaution
