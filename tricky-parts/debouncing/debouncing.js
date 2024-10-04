// Make sure function is not called too frequently
function queryAPI() {
	console.log("MAKING AN API REQUEST!!!");
}

const searchInput = document.querySelector("#search");

// this ends up querying the API on every keypress!!!
// searchInput.addEventListener("input", () => {
// 	queryAPI();
// });

// debounce the queryAPI function
let debounceTimeout;
searchInput.addEventListener("input", () => {
	clearTimeout(debounceTimeout); // clear previous timeout (initially undefined) before setting a new one
	debounceTimeout = setTimeout(() => {
		queryAPI();
	}, 500);
});
