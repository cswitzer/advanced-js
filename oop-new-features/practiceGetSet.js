class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(fullName) {
		let parts = fullName.split(" ");
		if (parts.length !== 2) {
			throw new Error("Invalid name");
		}
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

let chase = new User("Chase", "Switzer");
console.log(chase.fullName); // Chase Switzer
chase.fullName = "Chase Smith";
console.log(chase.fullName); // Chase Smith
