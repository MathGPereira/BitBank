import express from 'express';
import clientes from './clientesRoutes.js';
import enderecos from './enderecosRoutes.js';

const routes = app => {
	app.get('/', (req, res) => {
		res.status(200).send({ message: 'First test of Node.js API.' });
	});

	app.use(
		express.json(),
		clientes,
		enderecos
	);
};

export default routes;
