function greet() {
	console.log("Hello!");
}
const id = setTimeout(greet, 10000);
clearTimeout(id);
