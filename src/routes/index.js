import express from 'express';
import clientes from './clientes.routes.js';

const routes = app => {
	app.route('/').get((req, res) => {
		res.status(200).send({ message: "Server is working" });
	});

	app.use(
		express.json(),
		clientes
	);
}

export default routes;
