class Circle {
	#radius;

	constructor(radius) {
		this.#radius = radius;
	}

	get radius() {
		return this.#radius;
	}

	set radius(radius) {
		if (radius <= 0) {
			throw new Error("Radius must be positive");
		}
		this.#radius = radius;
	}
}

let circle = new Circle(5);
// console.log(circle.#radius); // throws an error
// circle.#radius = 10; // throws an error
