const db = require('../utils/db.js');

const SKILLS_QUERY = `SELECT * FROM skill ORDER BY "order"`;
const SKILL_CATEGORIES_QUERY = `SELECT * FROM skill_category ORDER BY "order"`;


// Create "skills" JSON object for JSON resume
async function getSkills() {
	let skills = (await db.query(SKILLS_QUERY)).rows;
	let categories = (await db.query(SKILL_CATEGORIES_QUERY)).rows;

	return categories.map(c => {
		let category_skills = skills.filter(s => s.category === c.id);
		return {
			"name": c.name,
			"keywords": category_skills.map(s => s.name)
		}
	});
}

module.exports = getSkills;