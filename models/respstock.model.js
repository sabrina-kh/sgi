const { model, Schema } = require("mongoose")

const RespstockSchema = new Schema({
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
        default: "RESP_STOCK",
      },
      company: {
        type: String,
        required: true,
      },
},{
    timestamps:true 
})

const Respstock = model("respstock", RespstockSchema)
module.exports = Respstock
