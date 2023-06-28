import cartoes from '../models/Cartao.js';
import ClienteController from './clientesController.js';

class CartaoController {

	static listarCartoes = async (req, res) => {
		try {
			const listaCartoes = await cartoes.find();
			res.status(200).json(listaCartoes);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static listarCartoesPorId = async (req, res) => {
		const { id } = req.params;

		try {
			const cartaoPorId = await cartoes.findById(id);
			res.status(200).json(cartaoPorId);
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static cadastrarCartao= async (req, res) => {
		const { numero, cvv, tipo, instituicao, bandeira } = req.body;
		const cartao = new cartoes(
			{
				numero: numero, cvv: cvv, tipo: tipo,
				instituicao: instituicao, bandeira: bandeira,
				criadoEm: new Date(), atualizadoEm: new Date()
			}
		);

		try {
			await cartao.save();
			CartaoController.#atualizaCartaoDoCliente(cartao._id);
			res.status(200).send({ mensagem: "Cartao cadastrado com sucesso" });
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}

	}

	static atualizarCartao = async (req, res) => {
		const { id } = req.params;

		try {
			await cartoes.findByIdAndUpdate(id, req.body, { new: true });
			res.status(200).send({ mensagem: "Cartão deletado com sucesso!" });
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static deletarCartao = async (req, res) => {
		const { id } = req.params;

		try {
			await cartoes.findByIdAndDelete(id);
			res.status(200).send({ mensagem: "Cartao deletado com sucesso!" });
		}catch(erro) {
			res.status(400).send({ erro: erro.message });
		}
	}

	static #atualizaCartaoDoCliente = async (id) => {
		const teste = "649b6f0581224b280f344376";
		await ClienteController.atualizarCartaoCliente(id, teste);
	}
}

export default CartaoController;
