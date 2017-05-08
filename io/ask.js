const readline = require('readline');

const waitTime = 3500;
const waitInterval = 500;
const answers = [];

let currentTime = 0;
let str = '.';

const questions = [
	"What is your name?",
	"What is your fav hobby?",
	"What is your preffered programming language?"
];

const ask = (i) =>  {
	process.stdout.write(`\n${questions[i]}`);
	process.stdout.write(" > ");
}

const writeWaitingMessage = () => {
	if (str.length > 3) str = '.';

	readline.clearLine(process.stdout, 0);
	readline.cursorTo(process.stdout, 0, null);
	process.stdout.write(`Waiiiiit for it ${str}`);

	str += '.';
}

// Listen for input
process.stdin.on('data', (data) => {

	answers.push(data.toString().trim());

	if ( answers.length < questions.length ) {
		ask(answers.length);
	} else {

		const interval = setInterval(() => {
			currentTime += waitInterval;
			writeWaitingMessage();
		}, waitInterval);

		setTimeout(() => {
			clearInterval(interval);
			process.exit();
		}, waitTime);

	}
} );

// Listen for process.exit()
process.on('exit', () => {
	process.stdout.write('\n\n');
	process.stdout.write(`${answers[1]} is for losers, ${answers[0]}. You need to write more ${answers[2]}.`);
	process.stdout.write('\n\n');
});

ask(0);