const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

Promise.any([
	fetch("http://nope.nope"),
	fetch(`${BASE_URL}/2`),
	fetch(`${BASE_URL}/3`),
	fetch(`${BASE_URL}/4`),
	fetch(`${BASE_URL}/5`),
	fetch(`${BASE_URL}/6`),
])
	.then((firstToFinish) => {
		console.log("THIS IS THE FIRST RESOLVED VALUE!", firstToFinish);
	})
	.catch((error) => {
		console.log("OH NO! THIS MEANS ALL PROMISES WERE REJECTED!", error);
	});

// different from Promise.race which returns the first resolved or rejected promise
// Promise.any returns the first resolved promise
// Promise.all return all resolved promises and rejects if any promise is rejected
