import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
	{
		id: {
			type: String
		},
		name: {
			type: String,
			required: [true, 'Customer name is required!']
		},
		surname: {
			type: String,
			required: [true, 'Customer surname is required!']
		},
		rg: {
			type: String,
			required: [true, 'Customer RG is required!'],
			unique: true
		},
		cpf: {
			type: String,
			required: [true, 'Customer CPF is required!'],
			unique: true
		},
		addressId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'addresses'
		},
		accountId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'accounts'
		},
		picture: {
			type: String,
			default: 'client.png'
		},
		createdAt: {
			type: Date,
			default: () => {
				return new Date();
			}
		},
		updatedAt: {
			type: Date,
			default: () => {
				return new Date();
			}
		}
	},
	{ versionKey: false }
);
const clients = mongoose.model('clients', clientSchema);

export default clients; 
