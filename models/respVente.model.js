const { model, Schema } = require("mongoose")

const RespVenteSchema = new Schema({
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

const RespVente = model("respVente", RespVenteSchema)
module.exports = RespVente
