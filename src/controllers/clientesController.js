import clientes from '../models/Cliente.js';

class ClienteController {

	static trocarNome = async (req, res) => {
		res.status(200).send({ message: 'Nome trocado com sucesso!' });
	}

	static trocarSobrenome = async (req, res) => {
		// Trocar sobrenome cadastrado no BD
	}

	static trocarRg = async (req, res) => {
		// Trocar RG cadastrado no BD
	}

	static trocarCpf = async (req, res) => {
		// Trocar CPF cadastrado no BD
	}

	static trocarEndereco = async (req, res) => {
		// Trocar endereço cadastrado no BD
	}

	static trocarFoto = async (req, res) => {
		// Trocar foto cadastrado no BD
	}
}

export default ClienteController;
