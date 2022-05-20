// Comparison Operators are used to compare values:
// 1. Compared item values are equal ==,
// 2. Compared item datatypes & values are equal ===,
// 3. Compared item values not equal !=
// 4. Compared item datatypes & values are not equal !==
//-------------------------------------------------------------------------------------------------------

let num1 = 17; // The datatype value is a "number"
let num2 = "17"; // The datatype value is a "string"

// Using basic comparison (==):
if (num1 == num2) {
	console.log("The values in both variables are equal!"); // This will be logged to the console.
} else {
	console.log("The values in both variables are not equal!");
}
//-------------------------------------------------------------------------------------------------------

let num3 = 400;
let num4 = "400";

// Using strict comparison (===):
if (num3 === num4) {
	console.log("The datatypes and values of the two variables are both equal!");
} else {
	console.log("The datatypes and values of the two variables are not both equal!"); // This will be logged to the console.
}
//-------------------------------------------------------------------------------------------------------

let num5 = 400;
let num6 = 500;

//Using strict comparison (===):
if (num5 != num6) {
	console.log("The values of the two variables are not equal!"); // This will be logged to the console.
} else {
	console.log("The values of the two variables are equal!");
}
//-------------------------------------------------------------------------------------------------------

let num7 = 300;
let num8 = "300";

//Using strict comparison (===):
if (num7 !== num8) {
	console.log("The values of the two variables are not equal!"); // This will be logged to the console.
} else {
	console.log("The values of the two variables are equal!");
}
//-------------------------------------------------------------------------------------------------------
