const db = require('../db.js');

// Create "work" JSON object for JSON resume
async function works() {
	let w = (await db.query('SELECT * FROM experience WHERE type LIKE \'%work%\'')).rows;
	let h = (await db.query('SELECT * FROM highlight')).rows;

	return w.map(work => {
		return {
			"company": work.company,
			"position": work.position,
			"startDate": work.startDate.toISOString().split('T')[0],
			"endDate": work.endDate.toISOString().split('T')[0],
			"summary": work.summary,
			"highlights": h.filter(highlight => highlight.experience === work.id).map(highlight => highlight.text)
		};
	})
}

module.exports = works;