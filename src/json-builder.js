fields = require('./fields');

function remove_empty(obj) {
	Object.keys(obj).forEach(key => {
		if (obj[key] && typeof obj[key] === 'object') remove_empty(obj[key]);
		else if (obj[key] == null) delete obj[key];
	});
	return obj;
}

// Create JSON object for JSON resume from bdd
async function json_builder() {
	let res = {
		basics: await fields.basics(),
	}

	// if a field is empty, remove it from the JSON object, recursively
	remove_empty(res);

	return res;
}	


module.exports = json_builder;