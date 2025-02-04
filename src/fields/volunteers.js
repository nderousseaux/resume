const db = require('../db.js');

// Create "volunteers" JSON object for JSON resume
async function volunteers() {
	let v = (await db.query('SELECT * FROM experience WHERE type LIKE \'%volunteer%\'')).rows;
	let h = (await db.query('SELECT * FROM highlight')).rows;
	v.sort((a, b) => {
		return b.endDate - a.endDate;
	});
	return v.map(volunteer => {
		return {
			"organization": volunteer.company,
			"position": volunteer.position,
			"startDate": volunteer.startDate.toISOString().split('T')[0],
			"endDate": volunteer.endDate.toISOString().split('T')[0],
			"summary": volunteer.summary,
			"highlights": h.filter(highlight => highlight.experience === volunteer.id).map(highlight => highlight.text)
		};
	})

}

module.exports = volunteers;