const EventEmitter = require('events').EventEmitter;

class Person extends EventEmitter {
	constructor(name) {
		super();
		this.name = name;
	}
}

module.exports = Person;