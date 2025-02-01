const db = require('../db.js');

// Get the value of a basic table by its name
function get_by_name(basics, name) {
	return basics.find(basic => basic.name == name).value;
}


// Create "profiles" JSON object for JSON resume
async function profiles() {
	let profiles = (await db.query('SELECT * FROM profile')).rows;

	return profiles.map(profile => {
		return {
			"network": profile.network,
			"username": profile.username,
			"url": profile.url
		};
	});
}


// Create "basics" JSON object for JSON resume
async function basics() {
	let ba = (await db.query('SELECT * FROM basic')).rows;

	return object = {
		"name": `${get_by_name(ba, 'name')} ${get_by_name(ba, 'lastname')}`,
		"label": get_by_name(ba, 'label'),
		"image": "picture.jpg",
		"email": get_by_name(ba, 'email'),
		"phone": get_by_name(ba, 'phone'),
		"website": get_by_name(ba, 'website'),
		"location": {
      "postalCode": get_by_name(ba, 'postalCode'),
      "city": get_by_name(ba, 'city'),
      "region": get_by_name(ba, 'region'),
    },
		"profiles": await profiles()
	};
}

module.exports = basics;