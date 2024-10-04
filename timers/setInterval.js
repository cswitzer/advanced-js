// reference https://stackoverflow.com/questions/12092439/javascript-setinterval-function-to-clear-itself
function startCountdown(seconds) {
	const interval = setInterval(() => {
		console.log(seconds);
		seconds--;
		if (seconds <= 0) {
			// interval is originally undefined but setInterval assigns a value to it and closures
			// keep the value of the variable even after the function has returned
			clearInterval(interval);
			console.log("Blast off!");
		}
	}, 1000);

	console.log("Exiting the function");
}
startCountdown(5);

// function* cycle(iterable) {
// 	while (true) {
// 		for (const item of iterable) {
// 			yield item;
// 		}
// 	}
// }
// const loader = cycle(["\\", "|", "/", "-"]);
// const loaderInterval = setInterval(() => {
// 	process.stdout.write(`\r${loader.next().value}`);
// }, 500);
