import express from 'express';
import ClientsController from '../controllers/clients.controller.js';

const router = express.Router();

router
	.get('/clients', ClientsController.listCustomers)
	.get('/clients/:id', ClientsController.listCustomerById)
	.post('/clients', ClientsController.registerCustomer)
	.put('/clients/:id', ClientsController.updateCustomer)
	.delete('/clients/:id', ClientsController.deleteCustomer)

export default router;
