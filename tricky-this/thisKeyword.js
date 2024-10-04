// This
class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		console.log(`${this.name} says woof`);
	}

	run(color) {
		console.log(`${this.name} is running and is the color ${color}`);
	}
}

function Cat(name) {
	this.name = name;
}

Cat.prototype.meow = function (color) {
	console.log(`${this.name} says meow and is the color ${color}`);
};

let piper = new Dog("Piper");
let barkFn = piper.bark;
let runFn = piper.run;
// barkFn(); // undefined says woof
// runFn("red"); // undefined is running and is the color red

// Using call method
console.log("----------Using call method----------");
let jake = new Dog("Jake");
barkFn.call(piper); // Piper says woof
barkFn.call(jake); // Jake says woof
piper.bark.call(jake); // Jake says woof
jake.run.call(piper, "blue"); // Piper is running and is the color blue

// Using apply method
console.log("----------Using apply method----------");
barkFn.apply(piper);
runFn.apply(piper, ["green"]);
piper.run.apply(jake, ["yellow"]);

// Using bind method
console.log("----------Using bind method----------");
let miriku = new Cat("Miriku");
let moon = new Cat("Moon");
let moonMeow = miriku.meow.bind(moon); // returns a function
moonMeow("black"); // Moon says meow and is the color black
moonMeow("white"); // Moon says meow and is the color white
moonMeow("brown"); // Moon says meow and is the color brown
