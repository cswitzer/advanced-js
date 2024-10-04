// The ??= returns right hand side if left side is either null or undefined
let num = null;
let num2 = 10;

num ??= 0;
num2 ??= 1_000_000;

console.log(num); // 0
console.log(num2); // 10

function doSetup(options = {}) {
	options.timeout ??= 1000;
	options.verbose ??= true;
	options.include ??= [];
	console.log(options);
}

doSetup({ timeout: 500, verbose: false, include: ["1", "2"] });
doSetup(); // { timeout: 1000, verbose: true, include: [] }
