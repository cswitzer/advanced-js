class Cat {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}

	static genusSpecies = "Felis catus";

	static meow() {
		console.log("Meow");
	}

	meow() {
		console.log(`Meow, I am ${this.name} and I am a ${this.breed}.`);
	}
}

let cat = new Cat("Whiskers", "Siamese");
Cat.genusSpecies; // "Felis catus"
Cat.meow(); // "Meow"
cat.meow(); // "Meow, I am Whiskers and I am a Siamese."
