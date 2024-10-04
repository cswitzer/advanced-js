let result = 0.1 + 0.2;
console.log(result); // 0.30000000000000004

function areFloatsEqual(a, b, epsilon = 1e-10) {
	return Math.abs(a - b) < epsilon;
}

let isEq = areFloatsEqual(0.1 + 0.2, 0.3); // true
console.log(isEq);
