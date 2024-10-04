// used to return right hand value if left hand value is null or undefined,
// not if it is falsy like the || operator
const user = {
	name: "Chase Switzer",
	age: {
		value: 25,
	},
};

const userName = user.name ?? "Guest";
console.log(userName); // Chase Switzer
console.log(user.email ?? "No email found"); // No email found

// used frequently with ?
const age = user?.age?.value ?? 18;
console.log(age); // 25
