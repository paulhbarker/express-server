const fs = require('fs');

const stream = fs.createReadStream('./io/chat.log', 'UTF-8');

let data = '';

stream.once('data', () => {
	console.log('\n\nStarted Reading File\n\n');
});

stream.on('data', (chunk) => {
	process.stdout.write(`  chunk: ${chunk.length} |`);
	data += chunk;
});

stream.on('end', () => {
		console.log(`\n\nFinished Reading File. File length: ${data.length}\n\n`);
})