const fs = require('fs');

const md = `
A Sample Markdown File
======================

A Subtitle
----------

* point
* point
* point

`;

fs.writeFile('./file_system/sample.md', md.trim(), (err) => {
	console.log("File Created");
})