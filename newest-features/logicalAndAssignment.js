// &&= sets to right side if left side is truthy
// If left side is falsy, it will remain falsy
// Use this to update a variable that is already set
let num = 10;

num &&= 50;
console.log(num); // 50

let emptyStr = "";

emptyStr &&= "Hello";
console.log(emptyStr); // ""
