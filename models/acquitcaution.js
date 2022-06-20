const { model, Schema } = require("mongoose")

const AcquitcautionSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    moyentransport: {
        type: String,
        required: true
    },
    schéma: {
        type: String,
        required: true
    },
    datesortie: {
        type: Date,
        required: true
    },
    dateacquit: {
        type: Date,
        required: true
    },
    
},{
    timestamps:true 
})

const acquitcaution = model("acquitcaution", AcquitcautionSchema)
module.exports = acquitcaution
