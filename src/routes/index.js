import express from 'express';
import clientes from './clientesRoutes.js';
import bancos from './bancosRoutes.js';

const routes = app => {
	app.get('/', (req, res) => {
		res.status(200).send({ message: 'First test of Node.js API.' });
	});

	app.use(
		express.json(),
		clientes,
		bancos
	);
};

export default routes;
