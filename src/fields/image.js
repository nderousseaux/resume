const db = require('../db.js');

// Return image of the user
async function picture() {
	let pic = (await db.query('SELECT file FROM picture WHERE type LIKE \'square_profile\'')).rows;

	return pic[0].file;
}

module.exports = picture;