const fs = require('fs');
const util = require('util');
// Let's serve our app using express.
const express = require("express");

// Socket.IO is going to require that we set it up with the HTTP module.
const http = require("http");

// Create an HTTP server based on our express application.
const app = express();
const server = http.createServer(app).listen(3000);

// When invoking the Socket.IO function we send it the server
// it should listen on for incoming connections.
const io = require('socket.io')(server);

app.use(express.static('./sockets/public'));

// With Socket.IO, we don't actually connect to the pure websocket.
// Socket.IO handles all of the connections for us. Brilliant!
io.on('connection', (socket) => {

	//fs.writeFileSync('./sockets/err.log', util.inspect(socket), 'utf-8');
	// Assume a user has sent a message. Broadcast sends it to all clients.
	console.log('New Connection');
	socket.on('chat', (message) => {
		socket.broadcast.emit('message', message)
	});

	// Emit a socket event: Send a welcom message on new connections.
	socket.emit('message', 'Welcome to the chatroom');

});

console.log('Starting Socket Server - http://localhost:3000');