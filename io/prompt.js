// Using readline to prompt for input

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
	name: '',
	sayings: []
}

rl.question('What is your grandmother\'s name? ', (answer) => {
	realPerson.name = answer;

	const stream = fs.createWriteStream('./io/' + realPerson.name + ".md");
	stream.write(`${realPerson.name}\n=================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();
	rl.on('line', (saying) => {
		if (saying.toLowerCase().trim() === 'exit') {
			stream.close();
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			stream.write(`* ${saying.trim()}\n`);

			rl.setPrompt(`What would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});
});

rl.on('close', () => {
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
});