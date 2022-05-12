const { model, Schema } = require("mongoose")

const articleSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
},{
    timestamps:true 
})

const article = model("article", articleSchema)
module.exports = article
