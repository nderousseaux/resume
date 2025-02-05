const dotenv = require("dotenv")
dotenv.config();

const db = require('../utils/db');

const PROFILES_QUERY = 'SELECT * FROM profile';
const BASICS_QUERY = 'SELECT * FROM basic';

// Get the value of a basic table by its name
function getByName(basics, name) {
	return basics.find(b => b.name == name).value;
}


// Create "profiles" JSON object for JSON resume
async function getProfiles() {
	let profiles = (await db.query(PROFILES_QUERY)).rows;

	return profiles.map(p => {
		return {
			"network": p.network,
			"username": p.username,
			"url": p.url
		};
	});
}


// Create "basics" JSON object for JSON resume
async function getBasics() {
	let b = (await db.query(BASICS_QUERY)).rows;

	return {
		"name": `${getByName(b, 'name')} ${getByName(b, 'lastname')}`,
		"label": getByName(b, 'label'),
		"image": `${process.env.HOST}/picture.jpg`,
		"email": getByName(b, 'email'),
		"phone": getByName(b, 'phone'),
		"website": getByName(b, 'website'),
		"location": {
      "postalCode": getByName(b, 'postalCode'),
      "city": getByName(b, 'city'),
      "region": getByName(b, 'region'),
    },
		"profiles": await getProfiles()
	};
}


module.exports = getBasics;
