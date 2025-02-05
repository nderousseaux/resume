const db = require('../utils/db.js');

const EDUCATIONS_QUERY = 'SELECT * FROM experience WHERE type LIKE \'%education%\' ORDER BY "endDate" DESC';


// Create "education" JSON object for JSON resume
async function getEducations() {
	let educations = (await db.query(EDUCATIONS_QUERY)).rows;
	
	return educations.map(e => {
		return {
			"institution": e.company,
			"area": e.position,
			"studyType": e.contract,
			"startDate": e.startDate.toISOString().split('T')[0],
			"endDate": e.endDate.toISOString().split('T')[0],
			"summary": e.summary,
		};
	})
}

module.exports = getEducations;
