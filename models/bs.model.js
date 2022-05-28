const { model, Schema } = require("mongoose")

const BsSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    numBs: {
        type: Number,
        required: true,
        default: 0
    },
    
},{
    timestamps:true 
})

const Bs = model("bs", BsSchema)
module.exports = Bs
