import clientes from '../models/Cliente.js';

class BancoController {

	static cadastrarCliente = async (req, res) => {
		const { nome, sobrenome, rg, cpf } = req.body;
		const cliente = new clientes({
			nome: nome,
			sobrenome: sobrenome,
			rg: rg,
			cpf: cpf,
			criadoEm: new Date(),
			atualizadoEm: new Date()
		});
		
		try {
			await cliente.save();
			res.status(201).json({ mensagem: `O cliente ${nome} ${sobrenome} cadastrado com sucesso!` });
		}catch(erro) {
			res.status(500).send({ erro: `${erro.message} - Falha ao cadastrar o cliente!` });
		}
	}

	// static cadastrarEndereco = async (req, res) => {
	// 	const endereco = new enderecos(req.body);

	// 	try {
	// 		await endereco.save();
	// 		res.status(201).send(endereco);
	// 	}catch(erro) {
	// 		res.status(500).json({ erro: `${erro.message} - Falha ao cadastrar o endereço!` });
	// 	}
	// }

	// static cadastrarConta = async (req, res) => {
	// 	const conta = new contas(req.body);

	// 	try {
	// 		await conta.save();
	// 		res.status(201).send(conta);
	// 	}catch(erro) {
	// 		res.status(500).json({ erro: `${erro.message} - Falha ao cadastrar a conta!` });
	// 	}
	// }
}

export default BancoController;
