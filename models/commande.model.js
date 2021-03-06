const { model, Schema } = require("mongoose");

const PaymentMethods = ['OFFLINE', 'ONLINE']

const CommandeSchema = new Schema(
	{
		client: {
			type: Schema.Types.ObjectId,
			ref: 'client',
		},
		articles: [
			{
				type: Schema.Types.ObjectId,
				ref: 'article',
			},
		],
		lieuDeLivraison: {
			type: String,
			required: true,
		},
		modeLivraison: {
			type: String,
			required: true,
		},
		modePaiement: {
			type: String,
			required: true,
      enum: PaymentMethods
		},
		numCom: {
			type: String,
			required: true,
			unique: true,
		},
		prixHT: {
			type: Number,
			//required: true,
			default: 0,
		},
		prixTOT: {
			type: Number,
			//required: true,
			default: 0,
		},
		nbFut: {
			type: Number,
			required: true,
			default: 0,
		},
		volume: {
			type: Number,
			required: true,
			default: 0,
		},
		remise: {
			type: Number,
			//required: true,
			default: 0,
		},

		isPassed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Commande = model("commande", CommandeSchema);
module.exports = Commande;
