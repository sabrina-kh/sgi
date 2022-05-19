const { model, Schema } = require("mongoose")

const RespventeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      userType: {
        type: String,
        default: "RESP_VENTE",
      },
      company: {
        type: String,
        required: true,
      },
    
},{
    timestamps:true 
})

const Respvente = model("respvente", RespventeSchema)
module.exports = Respvente
