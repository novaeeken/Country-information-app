function readJson(filename, callback) {

	let fs = require('fs');

	fs.readFile(filename, function(err, data) {
		if(err) {
			throw err;
		}
	const parsed = JSON.parse(data);

	callback(parsed);		//callback is a placeholder for the function we will use in main.js to do stuff with parsed.
	});
}

module.exports = {
	readJson: readJson
}