fields = require('./fields');

// Create JSON object for JSON resume from bdd
async function json_builder() {
	return {
		basics: await fields.basics(),
	}
}	


module.exports = json_builder;