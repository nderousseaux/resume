const dotenv = require("dotenv")
dotenv.config();

const { Client } = require('pg');

let connectionString = process.env.DATABASE_URL;

const client = new Client({
	connectionString: connectionString,
});

client.connect()
	.then(() => console.log('✅ Connected to PostgreSQL database'))
	.catch(err => console.error('❌ Connection error', err.stack));

module.exports = client;
