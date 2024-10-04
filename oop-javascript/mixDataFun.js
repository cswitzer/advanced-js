let myTri = {
	base: 10,
	height: 3,
	getArea: function () {
		return (this.base * this.height) / 2;
	},
	getHypotenuse: function () {
		return Math.sqrt(this.base ** 2 + this.height ** 2);
	},
};

console.log(myTri.getArea());
console.log(myTri.getHypotenuse());
