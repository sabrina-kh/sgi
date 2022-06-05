const { model, Schema } = require("mongoose")

const BsSchema = new Schema({
    respStock: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    numbs: {
        type: Number,
        required: true
    },
    
},{
    timestamps:true 
})

const bs = model("bs", BsSchema)
module.exports = bs
