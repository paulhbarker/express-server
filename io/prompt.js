// Using readline to prompt for input

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
	name: '',
	sayings: []
}

rl.question('What is your grandmother\'s name? ', (answer) => {
	realPerson.name = answer;
	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();
	rl.on('line', (saying) => {
		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			rl.setPrompt(`What would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	})
});

rl.on('close', () => {
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
})