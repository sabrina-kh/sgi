const { model, Schema } = require("mongoose")

const RespStockSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user'
        
    },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      userType: {
        type: String,
        default: "RESP_STOCK",
      },
      company: {
        type: String,
        required: true,
      },
},{
    timestamps:true 
})

RespStockSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		const salt = await genSalt(10);
		this.password = await hash(this.password, salt);
		return next();
	} catch (error) {
		return next(error);
	}
});

const RespStock = model("respStock", RespStockSchema)
module.exports = RespStock
