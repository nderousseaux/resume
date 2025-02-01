const db = require('../db.js');

// Create "projects" JSON object for JSON resume
async function projects() {
	let p = (await db.query('SELECT * FROM project')).rows;

	return p.map(project => {
		return {
			"name": project.name,
			"summary": project.summary,
			"startDate": project.startDate,
			"endDate": project.endDate,
			"url": project.url,
		};
	})
}

module.exports = projects;