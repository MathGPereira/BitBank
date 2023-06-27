import express from 'express';
import EnderecoController from '../controllers/enderecosController.js';

const router = express.Router();

router
	.get('/enderecos', EnderecoController.listarEnderecos)
	.get('/enderecos/:id', EnderecoController.listarEnderecosPorId)	
	.post('/enderecos', EnderecoController.cadastrarEndereco)
	.put('/enderecos/:id', EnderecoController.atualizarEndereco)
	.delete('/enderecos/:id', EnderecoController.deletarEndereco)
;

export default router;
