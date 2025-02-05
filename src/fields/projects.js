const db = require('../utils/db');

const PROJECTS_QUERY = 'SELECT * FROM project ORDER BY "endDate" DESC';


// Create "projects" JSON object for JSON resume
async function getProjects() {
	let projects = (await db.query(PROJECTS_QUERY)).rows;
	
	return projects.map(p => {
		return {
			"name": p.name,
			"summary": p.summary,
			"startDate": p.startDate.toISOString().split('T')[0],
			"endDate": p.endDate.toISOString().split('T')[0],
			"url": p.url,
		};
	})
}

module.exports = getProjects;