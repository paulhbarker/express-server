const http = require('http');

const port = 3000;
const headers = {
	'Content-Type': 'text/html'
}

const server = http.createServer((req, res) => {
	res.writeHead(200, headers);
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`);
});

server.listen(port);
console.log(`Server listening on port ${port}`);