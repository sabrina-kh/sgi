const { model, Schema } = require("mongoose")

const RespVenteSchema = new Schema({
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
        default: "RESP_VENTE",
      },
      company: {
        type: String,
        required: true,
      },
    
},{
    timestamps:true 
})

RespVenteSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		const salt = await genSalt(10);
		this.password = await hash(this.password, salt);
		return next();
	} catch (error) {
		return next(error);
	}
});

const RespVente = model("respVente", RespVenteSchema)
module.exports = RespVente
