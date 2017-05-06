const Person = require('./lib/Person');

const abe = new Person('Abraham Lincoln');
const george = new Person('George Washington');


george.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
})

abe.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
})

abe.emit('speak', 'Four score and seven years ago...');
george.emit('speak', 'It is far better to be alone, than to be in bad company.');