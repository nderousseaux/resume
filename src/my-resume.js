const fields = require('./fields');

const { remove_empty_fields } = require('./utils');


// Create JSON object for JSON resume from bdd
async function getJsonFromBDD() {
	return remove_empty_fields({
		basics: await fields.basics(),
		skills: await fields.skills(),
		work: await fields.works(),
		projects: await fields.projects(),
		volunteer: await fields.volunteers(),
		education: await fields.educations(),
		certificates: await fields.certificates(),
		languages: await fields.languages(),
		interests: await fields.interests(),
		references: await fields.references()
	});
}	


module.exports = {
	getJsonFromBDD
}
