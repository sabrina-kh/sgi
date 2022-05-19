const { model, Schema } = require("mongoose")

const RespreglementSchema = new Schema({
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

const Respreglement = model("respreglement", RespreglementSchema)
module.exports = Respreglement
