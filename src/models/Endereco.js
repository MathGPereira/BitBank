import mongoose from 'mongoose';

const enderecoSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		cep: {
			type: String,
			required: true
		},
		logradouro: {
			type: String,
			required: true
		},
		complemento: {
			type: String
		},
		bairro: {
			type: String,
			required: true
		},
		localidade: {
			type: String,
			required: true
		},
		uf: {
			type: String,
			required: true
		},
		ibge: {
			type: Number,
			required: true
		},
		gia: {
			type: Number,
			required: true
		},
		ddd: {
			type: Number,
			required: true
		},
		siafi: {
			type: Number,
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
const enderecos = mongoose.model('enderecos', enderecoSchema);

export default enderecos;
 