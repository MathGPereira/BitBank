import express from 'express';
import CartaoController from '../controllers/cartoesController.js';

const router = express.Router();

router
	.get('/cartoes', CartaoController.listarCartoes)
	.get('/cartoes/:id', CartaoController.listarCartoesPorId)
	.post('/cartoes', CartaoController.cadastrarCartao)
	.put('/cartoes/:id', CartaoController.atualizarCartao)
;

export default router;
