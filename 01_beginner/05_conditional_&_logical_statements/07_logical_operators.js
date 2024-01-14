// Logical Operators (aka Boolean Operators) are used to evaluate an expression to return true or false.
// 1. && (AND) - returns true when all expressions evaluated are true.
// 2. || (OR) - returns true when one or both expressions evaluated is /are true.
// 3. ! (NOT) - returns true when the evaluated expression is false, returns false when evaluated expression is true.
//-------------------------------------------------------------------------------------------------------
let bool = true;
let num1 = 23;
let num2 = 77;

// The AND (&&) logical operator:
if (bool == true && num1 < 50) {
	console.log("Both conditions are true."); // THis will be run.
} else {
	console.log("One or both conditions are false.");
}

// The OR (||) logical operator:
if (bool == true || num2 < 50) {
	console.log("One or both conditions are true."); // This will be run
} else {
	console.log("Both conditions are false.");
}

// The NOT (!) logical operator (handling a truthy condition):
if (bool) {
	console.log("Evaluated expression returns true (therefore, bool = true)");
} else {
	console.log("Evaluated expression returns false (therefore, bool = false)");
}

// The NOT (!) logical operator (handling a falsy condition):
if (!bool) {
	console.log("Evaluated expression returns true (therefore, bool = true)");
} else {
	console.log("Evaluated expression returns false (therefore, bool = false)");
}
