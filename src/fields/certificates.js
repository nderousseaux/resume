const db = require('../utils/db.js');

const CERTIFICATES_QUERY = 'SELECT * FROM certificate ORDER BY "date" DESC';


// Create "certificates" JSON object for JSON resume
async function getCertificates() {
	let certificates = (await db.query(CERTIFICATES_QUERY)).rows;

	return certificates.map(c => {
		return {
			"name": c.name,
			"date": c.date ? c.date.toISOString().split('T')[0] : null,
			"url": c.url,
			"issuer": c.issuer,
		};
	})
}

module.exports = getCertificates;
