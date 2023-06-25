import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://matheusgpestudos:GTVSyCc0BKmrxPSp@bitbank.q6abo5p.mongodb.net/BitBank');

const db = mongoose.connection;

export default db;

// GTVSyCc0BKmrxPSp