function printOutput(msg, value) {
	console.log(`${msg}: ${value}`);
}

function applySalesTax(taxRate, price) {
	return price + taxRate * price;
}

// We don't care about the value of this, we just want to apply partial application
const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0.0);
const totalCA = applyCASalesTax(100); // 107.25
const totalMT = applyMTSalesTax(100); // 100

printOutput("California's sales tax on $100", totalCA);
printOutput("Montana's sales tax on $100", totalMT);

// Another example
function multiply(a, b) {
	return a * b;
}

const triple = multiply.bind(null, 3);
const quadruple = multiply.bind(null, 4);

printOutput("3 * 5", triple(5)); // 15
printOutput("4 * 5", quadruple(5)); // 20
