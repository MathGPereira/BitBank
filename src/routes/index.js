import express from 'express';
import clientes from './clientesRoutes.js';
import enderecos from './enderecosRoutes.js';
import cartoes from './cartoesRoutes.js';

const routes = app => {
	app.get('/', (req, res) => {
		res.status(200).send({ message: 'First test of Node.js API.' });
	});

	app.use(
		express.json(),
		clientes,
		enderecos,
		cartoes
	);
};

export default routes;
