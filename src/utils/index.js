function remove_empty_fields(obj) {
	Object.keys(obj).forEach(key => {
		if (obj[key] && typeof obj[key] === 'object') remove_empty_fields(obj[key]);
		else if (obj[key] == null) delete obj[key];
	});
	return obj;
}

module.exports = {
	remove_empty_fields
}