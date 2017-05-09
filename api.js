const http = require('http');
const data = require('./data/inventory');

http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/json'});
		res.end(JSON.stringify(data));
	} else if (req.url === '/in-stock') {
		listInStock(res);
	} else if (req.url === '/on-back-order') {
		listOnBackOrder(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('404 Whoops... No data here.');
	}
}).listen(3000);

console.log("Server running on port 3000");

const listInStock = (res) => {
	const inStock = data.filter((item) => item.avail === 'In stock');

	res.end(JSON.stringify(inStock));
}

const listOnBackOrder = (res) => {
	const onOrder = data.filter((item) => item.avail === 'On back order');

	res.end(JSON.stringify(onOrder));
}

