var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("Wow it works!")
});

app.listen(8080, function() {
	console.log("Express server is running on port 8080");
});