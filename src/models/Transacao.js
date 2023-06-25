import mongoose from 'mongoose';

const transacaoSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		valor: {
			type: Number,
			required: true
		},
		cartaoId: {
			type: String,
			required: true
		},
		data: {
			type: Date,
			required: true
		},
		hora: {
			type: Date,
			required: true
		},
		clienteId: {
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
const transacoes = mongoose.model('transacoes', transacaoSchema);

export default transacoes;
	