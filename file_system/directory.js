const fs = require('fs');

if ( fs.existsSync('lib') ) {
	console.log('Directory already exists');
} else {
	fs.mkdir('lib', (err) => {
		if ( err ) {
			console.log(err);
		} else {
			console.log('Directory Created');
		}
	});
}

