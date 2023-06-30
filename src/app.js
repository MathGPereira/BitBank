import express from 'express';
import routes from './routes/index.js';
import db from './config/mongo.config.js';
import errorHandler from './middlewares/error-handler.js';
import notFound404 from './middlewares/notFound404.js';

db.on('error', console.log.bind(console, 'Connection error!'));
db.once('open', () => {
	console.log('Connection with MongoDB is working!');
});

const app = express();

routes(app);

app.use(notFound404);
app.use(errorHandler);

export default app;
