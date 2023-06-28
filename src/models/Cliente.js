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
			required: true,
			unique: true
		},
		cpf: {
			type: String,
			required: true,
			unique: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		endereco: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'enderecos'
		},
		cartao: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'cartoes'
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
