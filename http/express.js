const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Mutable list of terms. Our "API"
let skierTerms = [
	{
		term: 'Rip',
		defined: 'To move at a high rate of speed'
	},
	{
		term: 'Huck',
		defined: 'To throw your body off something, usually a natural feature like a cliff'
	},
	{
		term: 'Chowder',
		defined: 'Powder after it has been sufficiently skied'
	}
]

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

// Boot a static server serving files in this dir.
app.use(express.static('./http/public'));

// Allow cross-origin resource sharing.
app.use(cors());


// Routes
app.get('/dictionary-api', (req, res) => {
	res.json(skierTerms);
});

app.post('/dictionary-api', (req, res) => {
	skierTerms.push(req.body)
	res.json(skierTerms);
});

app.delete('/dictionary-api/:term', (req, res) => {
	skierTerms = skierTerms.filter((def) => def.term.toLowerCase() !== req.params.term.toLowerCase());
	res.json(skierTerms);
});


app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;