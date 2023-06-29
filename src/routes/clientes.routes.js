import express from 'express';
import ClientesController from '../controllers/clientes.controller.js';

const router = express.Router();

router
	.get('/clientes', ClientesController.listarClientes)

export default router;
