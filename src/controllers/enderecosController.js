import enderecos from '../models/Endereco.js';

class EnderecoController {

	static trocarCep = async (req, res) => {
		// Trocar CEP cadastrado no banco de dados e, automaticamente
		// trocar os outros dados de endereço
	}

	static trocarLogradouro = async (req, res) => {
		// Trocar o logradouro cadastrado no BD
	}

	static trocarComplemento = async (req, res) => {
		// Trocar complemento cadastrado no BD
	}

	static trocarBairro = async (req, res) => {
		// Trocar bairro cadastrado no BD
	}

	static trocarLocalidade = async (req, res) => {
		// Trocar localidade cadastrada no BD
	}

	static trocarUf = async (req, res) => {
		// Trocar UF cadastrada no BD
	}
}

export default EnderecoController;
