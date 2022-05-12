const { model, Schema } = require("mongoose")

const RespstockSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    
},{
    timestamps:true 
})

const Respstock = model("respstock", RespstockSchema)
module.exports = Respstock
