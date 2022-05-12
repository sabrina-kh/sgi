const { model, Schema } = require("mongoose")

const bsSchema = new Schema({
    respvente: {
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

const article = model("article", articleSchema)
module.exports = article
