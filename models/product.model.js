const { model, Schema } = require("mongoose")

const ProductSchema = new Schema({
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

const Product = model("product", ProductSchema)
module.exports = Product
