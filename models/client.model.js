const { model, Schema } = require("mongoose")

const ClientSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    
},{
    timestamps:true 
})

const Client = model("client", ClientSchema)
module.exports = Client
