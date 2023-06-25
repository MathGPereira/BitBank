import express from 'express';
import ClienteController from '../controllers/clientesController.js';

const router = express.Router();

router
	.get('/clientes', ClienteController.trocarNome);

export default router;
