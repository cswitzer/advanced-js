class Cat {
	static numCats = 0;
	numLegs = 4;
	hasTail = true;

	constructor(name) {
		this.name = name;
		Cat.numCats++;
	}
}

let blue = new Cat("Blue");
// we can access the property directly
console.log(blue.numLegs); // 4
console.log(blue.hasTail); // true

// we can set the property directly
blue.numLegs = 3;
blue.hasTail = false;
console.log(blue.numLegs); // 3
console.log(blue.hasTail); // false
