const { model, Schema } = require("mongoose")

const RespReglementSchema = new Schema({
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
        default: "RESP_REGLEMENT",
      },
      company: {
        type: String,
        required: true,
      },
    
},{
    timestamps:true 
})

const RespReglement = model("respReglement", RespReglementSchema)
module.exports = RespReglement
