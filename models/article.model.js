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
    designation: {
        type: String,
        required: true,
        unique: true
    },
    prix: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    degreEnfencement: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    temperature: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    tav: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    densite: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    coefficient: {
        type: Number,
        required: true,
        //unique: true
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
},{
    timestamps:true 
})

const Article = model("article", ArticleSchema)
module.exports = Article
