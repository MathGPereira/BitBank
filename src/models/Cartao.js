import mongoose from 'mongoose';

const cartaoSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		numero: {
			type: String,
			required: true
		},
		cvv: {
			type: String,
			required: true
		},
		tipo: {
			type: String,
			required: true
		},
		instituicao: {
			type: String,
			required: true
		},
		bandeira: {
			type: String,
			required: true
		},
		criadoEm: {
			type: Date,
			required: true
		},
		atualizadoEm: {
			type: Date,
			required: true
		}
	},
	{ versionKey: false }
);
const contas = mongoose.model('contas', contaSchema);

export default contas;
