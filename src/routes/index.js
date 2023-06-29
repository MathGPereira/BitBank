import express from 'express';
import clients from './clients.routes.js';

const routes = app => {
	app.route('/').get((req, res) => {
		res.status(200).send({ message: "Server is working" });
	});

	app.use(
		express.json(),
		clients
	);
}

export default routes;
