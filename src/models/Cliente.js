import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		nome: {
			type: String,
			required: true
		},
		sobrenome: {
			type: String,
			required: true
		},
		rg: {
			type: String,
			required: true
		},
		cpf: {
			type: String,
			required: true
		},
		enderecoId: {
			type: String,
			required: true
		},
		contatoId: {
			type: String,
			required: true
		},
		foto: {
			type: String,
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
const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;
