import express from 'express';
import ClientsController from '../controllers/clients.controller.js';

const router = express.Router();

router
	.get('/clients', ClientsController.listCustomers)
	.post('/clients', ClientsController.registerCustomer)
	.delete('/clients/:id', ClientsController.deleteCustomer)

export default router;
