import clientes from '../models/Cliente.js';

class ClienteController {

	static listarClientes = async (req, res) => {
		try {
			const listaDeClientes = await clientes.find();
			res.status(200).json(listaDeClientes);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static listarClientesPorId = async (req, res) => {
		const { id } = req.params;

		try {
			const clientePorId = await clientes.findById(id);
			res.status(200).json(clientePorId);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static cadastrarCliente = async (req, res) => {
		const { nome, sobrenome, rg, cpf, email } = req.body;
		const cliente = new clientes(
			{
				nome: nome, sobrenome: sobrenome,
				rg: rg, cpf: cpf, email: email,
				criadoEm: new Date(), atualizadoEm: new Date()
			}
		);

		try {
			await cliente.save();
			res.status(201).send({ message: "Cliente cadastrado com sucesso!" });
		}catch(erro) {
			res.status(500).send({ erro: erro.message });
		}
	}

	static atualizarCliente = async (req, res) => {
		const { id } = req.params;

		try {
			await clientes.findByIdAndUpdate(id, req.body, { new: true });
			res.status(200).send({ mensagem: "Usuário atualizado com sucesso!" });
		}catch(erro) {
			res.status(500).send({ erro: erro.message });
		}
	}

	static deletarCliente = async (req, res) => {
		const { id } = req.params;

		try {
			await clientes.findByIdAndDelete(id);
			res.status(200).send({ message: "Usuário deletado com sucesso!" });
		}catch(erro) {
			res.status(500).send({ erro: erro.message });
		}
	}
}

export default ClienteController;
