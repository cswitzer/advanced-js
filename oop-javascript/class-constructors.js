class Rectangle {
	constructor(height, width) {
		if (!Number.isFinite(height) || !Number.isFinite(width)) {
			throw new Error("Height and width must be numbers");
		}

		if (height <= 0 || width <= 0) {
			throw new Error("Height and width must be greater than 0");
		}

		this.height = height;
		this.width = width;
	}

	getArea() {
		return this.height * this.width;
	}

	getPerimeter() {
		return 2 * (this.height + this.width);
	}

	getDiagonal() {
		return Math.sqrt(this.height ** 2 + this.width ** 2);
	}
}

let myRect = new Rectangle(4, 5);
console.log(myRect.getArea());
console.log(myRect.getPerimeter());
console.log(myRect.getDiagonal());
