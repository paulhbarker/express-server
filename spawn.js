const spawn = require('child_process').spawn;

const cp = spawn('node', ['alwaysTalking']);

cp.stdout.on('data', (data) => {
	console.log(`STDOUT: ${data.toString()}`);
})

cp.on('close', () => {
	console.log("Child Process has ended");
	process.exit();
})

setTimeout(() => {
	cp.stdin.write('stop');
}, 4000)