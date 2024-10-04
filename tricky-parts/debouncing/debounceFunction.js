function queryAPI(searchTerm, color) {
	console.log(`Searching the api for ${searchTerm} with color ${color}`);
}

const searchInput = document.querySelector("#search");

function debounce(callback, delay) {
	let timeoutId;
	return function (...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			callback(...args);
		}, delay);
	};
}

debouncedQueryAPI = debounce(queryAPI, 500);
searchInput.addEventListener("input", (event) => {
	debouncedQueryAPI(event.target.value, "blue");
});
