import clients from '../models/Client.js';

class ClientsController { 

	static listCustomers = async (req, res) => {
		try {
			const clientsList = await clients.find();
			res.status(200).json(clientsList);
		}catch(error) {
			res.status(500).send({ error: `${error.message} - There was a server failure` });
		}
	}

	static registerCustomer = async (req, res) => {
		const client = ClientsController.#insertDates(req.body);
	
		try {
			await client.save();
			res.status(201).send({ message: 'Successfully registered customer!' });
		}catch(error) {
			res.status(500).send({ error: `${error.message} - There was a server failure` });
		}
	}

	static deleteCustomer = async (req, res) => {
		const { id } = req.params;

		try {
			await clients.findByIdAndDelete(id);
			res.status(200).send({ message: 'Successfully deleted customer!' });
		}catch(error) {
			res.status(500).send({ error: `${error.message} - There was a server failure!` });
		}
	}

	static updateCustomer = async (req, res) => {
		const { id } = req.params;

		try {
			await clients.findByIdAndUpdate(id, req.body, { new: true });
			res.status(200).send({ message: 'Successfully updated customer!' });
		}catch(error) {
			res.status(500).send({ error: `${error.message} - There was a server failure!` });
		}
	}

	static #insertDates = ({ ...informations }) => {
		informations.createdAt = new Date();
		informations.updatedAt = new Date();

		return new clients(informations);
	}
}

export default ClientsController;
