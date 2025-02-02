const db = require('../db.js');

// Create "interests" JSON object for JSON resume
async function interests() {
	let i = (await db.query('SELECT * FROM interest')).rows;
	let c = (await db.query('SELECT * FROM interest_category')).rows;

	return c.sort((a, b) => a.order - b.order).map(category => {
		return {
			"name": category.name,
			"keywords": i.filter(interest => interest.category === category.id).map(interest => interest.name)
		};
	})
}

module.exports = interests;