// NaN comes from logical math errors like dividing by zero or trying to multiply a string by a number.
// NaN is a value in JavaScript that represents an unrepresentable number.
// It is the result of an operation that cannot produce a normal number.
// It is not equal to any other value, including itself.

// COERCE to a number then check if it is NaN
isNaN(0 / 0); // true
isNaN("hello"); // true
isNaN("hello" * 3); // true

// Must explicitly pass the value NaN
Number.isNaN(0 / 0); // true
Number.isNaN("hello"); // false
console.log(Number.isNaN("hello" * 3)); // true
