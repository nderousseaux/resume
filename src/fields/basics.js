const db = require('../db.js');

// Get the value of a basic table by its name
function get_by_name(basics, name) {
	return basics.find(basic => basic.name == name).value;
}

// Create "basics" JSON object for JSON resume
async function basics() {
	let basics = (await db.query('SELECT * FROM basic')).rows;

	return object = {
		"name": `${get_by_name(basics, 'name')} ${get_by_name(basics, 'lastname')}`,
	};
}

module.exports = basics;