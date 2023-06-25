import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			unique: true
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
			required: true,
			unique: true
		},
		cpf: {
			type: String,
			required: true,
			unique: true
		},
		endereco: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'enderecos'
		},
		conta: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'contas'
		},
		foto: {
			type: String,
			default: 'cliente.png'
		},
		role: {
			type: String,
			default: 'usuario'
		},
		criadoEm: {
			type: String,
			required: true
		},
		atualizadoEm: {
			type: String,
			required: true
		}
	},
	{ versionKey: false }
);
const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;
