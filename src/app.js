import express from 'express';
import routes from './routes/index.js';
import db from './config/mongo.config.js';

db.on('error', console.log.bind(console, 'Connection error!'));
db.once('open', () => {
	console.log('Connection with MongoDB is working!');
});

const app = express();
routes(app);

export default app;
