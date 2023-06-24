import express from 'express';

const routes = app => {
	app.get('/', (req, res) => {
		res.status(200).send({ message: 'First test of Node.js API.' });
	});

	app.use(
		express.json()
	);
};

export default routes;
