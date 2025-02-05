const db = require('../utils/db.js');

const VOLUNTEERS_QUERY = 'SELECT * FROM experience WHERE type LIKE \'%volunteer%\' ORDER BY "endDate" DESC';
const HIGHLIGHTS_QUERY = 'SELECT * FROM highlight';


// Create "volunteers" JSON object for JSON resume
async function getVolunteers() {
	let volunteers = (await db.query(VOLUNTEERS_QUERY)).rows;
	let highlights = (await db.query(HIGHLIGHTS_QUERY)).rows;
	
	return volunteers.map(v => {
		return {
			"organization": v.company,
			"position": v.position,
			"startDate": v.startDate.toISOString().split('T')[0],
			"endDate": v.endDate.toISOString().split('T')[0],
			"summary": v.summary,
			"highlights": highlights.filter(h => h.experience === v.id)
				.map(h => h.text)
		};
	})

}

module.exports = getVolunteers;