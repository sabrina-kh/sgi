const { genSalt, hash } = require('bcryptjs');
const { model, Schema } = require('mongoose');

const ClientSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
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
			default: 'CLIENT',
		},
		company: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

ClientSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		const salt = await genSalt(10);
		this.password = await hash(this.password, salt);
		return next();
	} catch (error) {
		return next(error);
	}
});

const Client = model('client', ClientSchema);
module.exports = Client;
