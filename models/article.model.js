const { model, Schema } = require('mongoose');

const ArticleSchema = new Schema(
	{
		respStock: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		respVente: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		code: {
			type: String,
			required: true,
			unique: true,
		},
		designation: {
			type: String,
			required: true,
			//unique: true
		},
		prix: {
			type: Number,
			required: true,
			unique: true,
		},
		degreEnfencement: {
			type: Number,
			required: true,
			// unique: true
		},
		temperature: {
			type: Number,
			required: true,
			//unique: true
		},
		tav: {
			type: Number,
			required: true,
			//unique: true
		},
		densite: {
			type: Number,
			required: true,
			//unique: true
		},
		coefficient: {
			type: Number,
			required: true,
			//unique: true
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Article = model('article', ArticleSchema);
module.exports = Article;
