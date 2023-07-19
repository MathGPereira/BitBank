import mongoose from 'mongoose';

mongoose.connect(process.env.STRING_CONNECTION);

const mongo = mongoose.connection;

export default mongo;
