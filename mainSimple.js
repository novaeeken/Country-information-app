let read = require('./json-file-reader');													// put our module inside a variable				

read.readJson('countries.json', function(data) {
	const content = data;																	// put the value of 'parsed' which is now in the placeholer 'data' into 'content' so we can use it

	let output = content.find(element => element.name === process.argv[2]);					// find the element inside 'content' which property 'name' equals the input from the terminal
	console.log(`Country: ${output.name}\nTop Level Domain: ${output.topLevelDomain}`);		// print out the value of the 'name' and 'Top Level Domain' properties on the screen

});