// Supports negative indexes!!!
const colors = ["red", "green", "blue", "yellow", "black", "white"];
console.log(colors.at(-1)); // white

// loop through -1 to -3
for (let i = -1; i >= -3; i--) {
	console.log(colors.at(i));
}
