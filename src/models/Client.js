import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
	{
		id: {
			type: String
		},
		name: {
			type: String,
			required: [true, 'This field is required!']
		},
		surname: {
			type: String,
			required: [true, 'This field is required!']
		},
		rg: {
			type: String,
			required: [true, 'This field is required'],
			unique: [true, 'This field need to be unique!']
		},
		cpf: {
			type: String,
			required: [true, 'This field is required'],
			unique: [true, 'This field need to be unique!']
		},
		addressId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'addresses'
		},
		accountId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'account'
		},
		picture: {
			type: String,
			default: 'client.png'
		},
		createdAt: {
			type: Date,
			required: [true, 'This field is required!']
		},
		updatedAt: {
			type: Date,
			required: [true, 'This field is required!']
		}
	},
	{ versionKey: false }
);
const clients = mongoose.model('clients', clientSchema);

export default clients; 
