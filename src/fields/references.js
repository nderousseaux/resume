const db = require('../utils/db.js');

const REFERENCES_QUERY = 'SELECT * FROM reference';


// Create "references" JSON object for JSON resume
async function getReferences() {
	let references = (await db.query(REFERENCES_QUERY)).rows;

	return references.map(r => {
		return {
			"name": r.name,
			"reference": r.reference
		};
	})
}

module.exports = getReferences;