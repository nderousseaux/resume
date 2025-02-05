const db = require('../utils/db.js');

const LANGUAGES_QUERY = 'SELECT * FROM language';


// Create "language" JSON object for JSON resume
async function getLanguages() {
	let languages = (await db.query(LANGUAGES_QUERY)).rows;

	return languages.map(l => {
		return {
			"language": l.name,
			"fluency": l.fluency
		};
	})
}

module.exports = getLanguages;