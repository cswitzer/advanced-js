class Triangle {
	constructor(base, height) {
		this.base = base;
		this.height = height;
	}

	getArea() {
		return (this.base * this.height) / 2;
	}

	getHypotenuse() {
		return Math.sqrt(this.base ** 2 + this.height ** 2);
	}
}

class RightTriangle extends Triangle {
	constructor(base, height) {
		super(base, height);
	}

	describe() {
		console.log("I am a right triangle");
	}
}

class ColorTriangle extends Triangle {
	constructor(base, height, color) {
		super(base, height);
		if (typeof color !== "string") {
			throw new Error("Color must be a string");
		}
		this.color = color;
	}

	describe() {
		return `I am a ${this.color} triangle`;
	}
}

let rightTri = new RightTriangle(3, 4);
console.log(rightTri.getArea());

let redTri = new ColorTriangle(3, 5, "red");
console.log(redTri.describe());
