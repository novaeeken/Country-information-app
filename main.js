let read = require('./json-file-reader');				// storing our module inside of a variable

	read.readJson('countries.json', function(data) {	// calling our module with the filename and an anonymous function. The code block INSIDE the anonymous function will be executed as the callback function in the module;
		let output = "";								// HOWEVER, it needs a parameter 'data' to pass on whatever is inside the variable 'parsed' declared in the module;

		const content = data;							// 'parsed' from module is now inside 'data', so to use parsed, put data into variable 'content'. 
	
		for(let i = 0; i < content.length; i++) {
			if(content[i].name == process.argv[2]) {
				output = "Country: " + content[i].name + '\n' + "Top Level Domain: " + content[i].topLevelDomain;
			}
		}
		console.log(output); 
	});