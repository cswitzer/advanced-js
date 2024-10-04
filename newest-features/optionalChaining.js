const user = {
	email: "chase@yahoo.com",
	name: {
		first: "Chase",
		last: "Switzer",
	},
	address: {
		street: "1234 Elm St",
		city: "Denver",
		state: "CO",
	},
	greet() {
		console.log(`Hello ${this.name.first}`);
	},
};

const user2 = {
	email: "user2@email.com",
	name: {
		first: "User",
		last: "Two",
	},
	address: {
		street: "1234 Elm St",
		city: "Denver",
		state: "CO",
		zipCode: 80206,
	},
};
const users = [user, user2];

// old method
let firstName = user && user.name && user.name.first;

// new method
firstName = user?.name?.first;
console.log(firstName); // Chase

let zipCode = user?.address?.zipCode;
console.log(zipCode); // undefined

// Optional chaining with function
for (let user of users) {
	console.log(user?.greet?.());
}
