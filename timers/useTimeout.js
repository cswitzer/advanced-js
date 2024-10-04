// call callback function after 2 seconds

const myTimeout = setTimeout(() => {
	console.log("Hello, World!");
}, 2000);

setTimeout(function () {
	let num = 20n + 40n;
	console.log("The sum of 20n and 40n is: ", num);
}, 4000);
