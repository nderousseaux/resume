const db = require('../utils/db.js');

const PROFILE_PICTURE_QUERY = 'SELECT file FROM picture WHERE type LIKE \'square_profile\'';


// Return image of the user
async function getProfilePicture() {
	let pic = (await db.query(PROFILE_PICTURE_QUERY)).rows;

	return pic[0].file;
}

module.exports = getProfilePicture;