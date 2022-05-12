const { model, Schema } = require("mongoose")

const RespreglementSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    
},{
    timestamps:true 
})

const Respreglement = model("respreglement", RespreglementSchema)
module.exports = Respreglement
