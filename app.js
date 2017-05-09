const express = require('express');

const app = express();

// Middleware
app.use((req, res, next) => {
	console.log(`${req.method} request for '${req.url}'`);
	next();
})

app.use(express.static('./public'));

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;