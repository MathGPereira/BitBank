import enderecos from '../models/Endereco.js';

class EnderecoController {

	static listarEnderecos = async (req, res) => {
		try {
			const listaEnderecos = await enderecos.find();
			res.status(200).json(listaEnderecos);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static listarEnderecosPorId = async (req, res) => {
		const { id } = req.params;

		try {
			const enderecoPorId = await enderecos.findById(id);
			res.status(200).json(enderecoPorId);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static cadastrarEndereco = async (req, res) => {
		const { cliente, cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi } = req.body;
		const endereco = new enderecos(
			{
				cliente: cliente, cep: cep,
				logradouro: logradouro,
				complemento: complemento, bairro: bairro,
				localidade: localidade, uf: uf,
				ibge: ibge, gia: gia, ddd: ddd,
				siafi: siafi, criadoEm: new Date(),
				atualizadoEm: new Date()
			}
		);

		try {
			await endereco.save();
			res.status(201).send({ mensagem: "Endereco cadastrado com sucesso!" });
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static atualizarEndereco = async (req, res) => {
		const { id } = req.params;

		try {
			await enderecos.findByIdAndUpdate(id, req.body, { new: true });
			res.status(201).send({ mensagem: "Endereço atualizado com sucesso!" });
		}catch(erro) {
			res.status(500).send({ erro: erro.message });
		}
	}

	static deletarEndereco = async (req, res) => {
		const { id } = req.params;

		try {
			await enderecos.findByIdAndDelete(id);
			res.status(200).send({ mensagem: "Endereço deletado com sucesso!" });
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}
}

export default EnderecoController;
