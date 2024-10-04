const max = Number.MAX_VALUE; // 1.7976931348623157e+308
const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991

// loses precision
console.log(maxSafe);
console.log(maxSafe + 50);

// BigInt sidestepping the issue (two ways to create BigInt)
const bigInt1 = BigInt("12312312312312312312321321321312123");
const bigInt2 = 12312312312312312312321321321312123n;
console.log(bigInt1 === bigInt2); // true

let bigIntMax = BigInt(maxSafe);
// const result = bigIntMax + 100; // cannot mix BigInt and Number
const result = bigIntMax + 2n;
console.log(result); // 9007199254740993n
