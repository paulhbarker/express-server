const EventEmitter = require('events').EventEmitter;
const util = require('util');

class Person extends EventEmitter {
	constructor(name) {
		super();
		this.name = name;
	}
}

const abe = new Person('Abraham Lincoln');

abe.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
})

abe.emit('speak', 'Four score and seven years ago...');