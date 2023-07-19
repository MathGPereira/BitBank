import 'dotenv/config.js';
import app from './src/app.js';

const hostname = 'localhost';
const port = 3000;

app.listen(port, () => {
	console.log(`The server is listening in http://${hostname}:${port}`);
});
