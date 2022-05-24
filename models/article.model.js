const { model, Schema } = require("mongoose")

const ArticleSchema = new Schema({
    respVente: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    désignation: {
        type: String,
        required: true,
        unique: true
    },
    prix: {
        type: Number,
        required: true,
        unique: true
    },
    degreEnfencement: {
        type: Number,
        required: true,
        unique: true
    },
    température: {
        type: Number,
        required: true,
        unique: true
    },
    tav: {
        type: Number,
        required: true,
        unique: true
    },
    densité: {
        type: Number,
        required: true,
        unique: true
    },
    coefficient: {
        type: Number,
        required: true,
        unique: true
    },
    quantité: {
        type: Number,
        required: true,
    },
},{
    timestamps:true 
})

const Article = model("article", ArticleSchema)
module.exports = Article
