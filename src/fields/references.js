const db = require('../db.js');

// Create "references" JSON object for JSON resume
async function references() {
	let r = (await db.query('SELECT * FROM reference')).rows;

	return r.map(reference => {
		return {
			"name": reference.name,
			"reference": reference.reference
		};
	})
}

module.exports = references;