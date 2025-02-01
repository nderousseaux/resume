const db = require('../db.js');

// Create "certificates" JSON object for JSON resume
async function certificates() {
	let c = (await db.query('SELECT * FROM certificate')).rows;

	return c.map(certificate => {
		return {
			"name": certificate.name,
			"date": certificate.date.toISOString().split('T')[0],
			"url": certificate.url,
			"issuer": certificate.issuer,
		};
	})
}

module.exports = certificates;