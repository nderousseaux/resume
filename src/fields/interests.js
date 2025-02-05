const db = require('../utils/db.js');

const INTERESTS_QUERY = 'SELECT * FROM interest';
const INTERESTS_CATEGORY_QUERY = 'SELECT * FROM interest_category ORDER BY "order"';


// Create "interests" JSON object for JSON resume
async function getInterests() {
	let interests = (await db.query(INTERESTS_QUERY)).rows;
	let categories = (await db.query(INTERESTS_CATEGORY_QUERY)).rows;

	return categories.map(c => {
		return {
			"name": c.name,
			"keywords": interests.filter(i => i.category === c.id)
				.map(i => i.name)
		};
	})
}

module.exports = getInterests;