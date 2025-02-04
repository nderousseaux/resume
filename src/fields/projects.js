const db = require('../db.js');

// Create "projects" JSON object for JSON resume
async function projects() {
	let p = (await db.query('SELECT * FROM project')).rows;
	p.sort((a, b) => {
		return b.endDate - a.endDate;
	});
	return p.map(project => {
		return {
			"name": project.name,
			"summary": project.summary,
			"startDate": project.startDate.toISOString().split('T')[0],
			"endDate": project.endDate.toISOString().split('T')[0],
			"url": project.url,
		};
	})
}

module.exports = projects;