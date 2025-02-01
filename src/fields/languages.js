const db = require('../db.js');

// Create "language" JSON object for JSON resume
async function languages() {
	let l = (await db.query('SELECT * FROM language')).rows;

	return l.map(language => {
		return {
			"language": language.name,
			"fluency": language.fluency
		};
	})
}

module.exports = languages;