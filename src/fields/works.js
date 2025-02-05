const db = require('../utils/db.js');

const WORKS_QUERY = 'SELECT * FROM experience WHERE type LIKE \'%work%\' ORDER BY "endDate" DESC';
const HIGHLIGHTS_QUERY = 'SELECT * FROM highlight ORDER BY "order" ASC';


// Create "work" JSON object for JSON resume
async function getWorks() {
	let works = (await db.query(WORKS_QUERY)).rows;
	let highlights = (await db.query(HIGHLIGHTS_QUERY)).rows;

	return works.map(w => {
		return {
			"company": w.company,
			"position": w.position,
			"url": w.url,
			"website": w.website,
			"location": w.location,
			"startDate": w.startDate ? w.startDate.toISOString().split('T')[0] : null,
			"endDate": w.endDate ? w.endDate.toISOString().split('T')[0] : null,
			"summary": w.summary,
			"highlights": highlights.filter(h => h.experience === w.id)
				.map(h => h.text)
		};
	})
}

module.exports = getWorks;