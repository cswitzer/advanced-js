const chase = {
	name: "Chase",
	age: 28,
	greet: function () {
		console.log(
			`Hello, my name is ${this.name} and I am ${this.age} years old.`
		);
	},
};

const btn = document.querySelector(".click-me");

// wrong way, since this is bound to the button element and not the chase object
btn.addEventListener("click", chase.greet); // Hello, my name is undefined and I am undefined years old.

// correct way, since we are binding the chase object to the greet method
btn.addEventListener("click", chase.greet.bind(chase)); // Hello, my name is Chase and I am 28 years old.
