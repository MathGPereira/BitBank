import express from 'express';
import BancoController from '../controllers/bancoController.js';

const router = express.Router();

router
	.post('/banco/cadastrar', BancoController.cadastrarCliente)

export default router;
