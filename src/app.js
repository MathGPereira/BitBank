import express from 'express';
import routes from './routes/index.js';
import db from './config/conexaoDb.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
	console.log('Conexão com o banco feira com sucesso!');
});

const app = express();

routes(app);

export default app;
