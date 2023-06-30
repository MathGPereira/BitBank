import clients from '../models/Client.js';
import NotFoundError from '../errors/Not-found.errors.js';

class ClientsController { 

	static listCustomers = async (req, res, next) => {
		try {
			const clientsList = await clients.find();
			res.status(200).json(clientsList);
		}catch(error) {
			next(error);
		}
	}

	static listCustomerById = async (req, res, next) => {
		const { id } = req.params;

		try {
			const clientById = await clients.findById(id);

			if(clientById) {
				res.status(200).json(clientById);
			}else {
				next(new NotFoundError('Customer not found!'));
			}
		}catch(error) {
			next(error);
		}
	}

	static registerCustomer = async (req, res, next) => {
		const client = new clients(req.body);
	
		try {
			await client.save();
			res.status(201).send({ message: 'Successfully registered customer!' });
		}catch(error) {
			next(error);
		}
	}

	static deleteCustomer = async (req, res, next) => {
		const { id } = req.params;

		try {
			await clients.findByIdAndDelete(id);
			res.status(200).send({ message: 'Successfully deleted customer!' });
		}catch(error) {
			next(error);
		}
	}

	static updateCustomer = async (req, res) => {
		const { id } = req.params;

		try {
			await clients.findByIdAndUpdate(id, req.body, { new: true });
			res.status(200).send({ message: 'Successfully updated customer!' });
		}catch(error) {
			next(error);
		}
	}
}

export default ClientsController;
