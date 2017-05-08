const grab = (flag) => {
	const index = process.argv.indexOf(flag);
	return (index === - 1) ? null : process.argv[index + 1];
};

const greeting = grab('--greeting');
const user = grab('--user');

if ( ! user || ! greeting ) {
	console.log('You didn\'t supply any input...');
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}





