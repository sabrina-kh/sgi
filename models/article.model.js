const { model, Schema } = require("mongoose")

const ArticleSchema = new Schema({
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

const Article = model("article", ArticleSchema)
module.exports = Article
