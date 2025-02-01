const db = require('../db.js');

// Create "skills" JSON object for JSON resume
async function skills() {
	let s = (await db.query('SELECT * FROM skill')).rows;
	let c = (await db.query('SELECT * FROM skill_category')).rows;

	return c.map(category => {
		let skills = s.filter(skill => skill.category === category.id);
		return {
			"name": category.name,
			"keywords": skills.map(skill => skill.name)
		}
	})
}

module.exports = skills;