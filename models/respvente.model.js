const { model, Schema } = require("mongoose")

const RespventeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    
},{
    timestamps:true 
})

const Respvente = model("respvente", RespventeSchema)
module.exports = Respvente
