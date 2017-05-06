const grab = (flag) => {
	'use strict';
	const index = process.argv.indexOf(flag);
	return (index === - 1) ? null : process.argv[index + 1];
}

const greeting = grab('--greeting');
const user = grab('--user');

if ( ! user || ! greeting ) {
	console.log('You didn\'t supply any input...');
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}

const waitTime = 3000;
let answers = [];

const questions = [
	"What is your name?",
	"What is your fav hobby?",
	"What is your preffered programming language?"
];

function ask(i) {
	'use strict';
	process.stdout.write(`\n${questions[i]}`);
	process.stdout.write(" > ");
}

process.stdin.on('data', (data) => {
	answers.push(data.toString().trim());
	if ( answers.length < questions.length ) {
		ask(answers.length);
	} else {
		console.log("Waiiiiit for it...");
		setTimeout(() => {
			process.exit();
		}, waitTime);

	}
} );

process.on('exit', () => {
	'use strict';
	process.stdout.write('\n\n');
	process.stdout.write(`${answers[1]} is for losers, ${answers[0]}. You need to write more ${answers[2]}.`);
	process.stdout.write('\n\n');
});

ask(0);



