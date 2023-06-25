import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://matheusgpestudos:M123456Aa!@#@cluster0.m2jd9dr.mongodb.net/Cluster0');

const db = mongoose.conection;

export default db;
