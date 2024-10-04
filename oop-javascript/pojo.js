const pet = { species: "Dog", name: "Chase", age: 3 };

for (const [key, value] of Object.entries(pet)) {
	console.log(`${key}: ${value}`);
}

// console.log(pet["age"]);
console.log(pet.species);

// all values are stringified
pet[true] = "hello";
pet["true"] = "world";
console.log(pet.true);

pet.bark = function () {
	return "Woof!";
};
console.log(pet.bark());
