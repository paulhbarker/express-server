const exec = require("child_process").exec;

exec("ls", (err, stdout) => {
	if (err) {
		throw err;
	}
	console.log("Listing directory finished");
	console.log(stdout);
});