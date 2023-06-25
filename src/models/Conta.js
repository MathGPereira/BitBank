import mongoose from 'mongoose';

const contaSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		numeroConta: {
			type: String,
			required: true
		},
		agencia: {
			type: String,
			required: true
		},
		saldo: {
			type: Number,
			required: true
		},
		limiteConta: {
			type: String,
			required: true
		},
		tiposCartao: {
			type: String,
			required: true
		},
		transacoes: {
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
