class Circle {
	static allowedColors = new Set(["red", "green", "blue"]);

	constructor(radius, color) {
		this._radius = radius;
		this.setColor(color);
	}

	setColor(color) {
		if (!Circle.allowedColors.has(color)) {
			throw new Error("Invalid color");
		}
		this._color = color;
	}

	// looks like a property but it's a method (a getter)
	get diameter() {
		return this._radius * 2;
	}

	get circumference() {
		return this.diameter * Math.PI;
	}

	get radius() {
		return this._radius;
	}

	get color() {
		return this._color;
	}

	set radius(radius) {
		if (radius <= 0) {
			throw new Error("Radius must be positive");
		}
		this._radius = radius;
	}

	set color(color) {
		this.setColor(color);
	}
}

let circle = new Circle(5, "red");
console.log(circle.diameter); // 10
console.log(circle.circumference); // 31.41592653589793

circle.radius = 23; // done via setter, but actually calls a function
// circle.radius = -23; // throws an error

let blueCircle = new Circle(10, "blue");
console.log(blueCircle.color); // blue
blueCircle.color = "green"; // works
// blueCircle.color = "yellow"; // throws an error
