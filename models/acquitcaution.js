const { model, Schema } = require("mongoose")

const AcquitcautionSchema = new Schema({
    respReglement: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    moyentransport: {
        type: Date,
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
