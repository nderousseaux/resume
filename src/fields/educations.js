const db = require('../db.js');

// Create "education" JSON object for JSON resume
async function educations() {
	let e = (await db.query('SELECT * FROM experience WHERE type LIKE \'%education%\'')).rows;
	e.sort((a, b) => {
		return b.startDate - a.startDate;
	});
	return e.map(education => {
		return {
			"institution": education.company,
			"area": education.position,
			"studyType": education.contract,
			"startDate": education.startDate.toISOString().split('T')[0],
			"endDate": education.endDate.toISOString().split('T')[0],
			"summary": education.summary,
		};
	})
}

module.exports = educations;