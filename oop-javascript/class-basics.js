class Triangle {
	getArea() {
		return (this.base * this.height) / 2;
	}

	getHypotenuse() {
		return Math.sqrt(this.base ** 2 + this.height ** 2);
	}
}

let myTri = new Triangle();
myTri.base = 4;
myTri.height = 5;
console.log(myTri.getArea());
console.log(myTri.getHypotenuse());
