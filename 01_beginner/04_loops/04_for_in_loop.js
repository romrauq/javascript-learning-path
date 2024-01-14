const myArray1 = ["Kwesi", "James", "Steven", "Frank"];
const myArray2 = [
	["Jane", 16],
	["Felicia", 15],
	["Dorothy", 13],
	["Whitney", 16],
];
let person = { name: "John", age: 34, occupation: "Fixer" };
//-------------------------------------------------------------------------------------------------------
// With arrays, the for...in loop loops and returns the indexes of items within an array.
// With objects, The for...in loop loops through property the names of an object/array.
// In the case of an array the for...in loop returns the index & (any user defined property names) of items in the array.
// It loops through innumerable properties.

for (i in myArray1) {
	// the value `x` with each loop is each index of the array items within the array.
	console.log(myArray1[i]); // Passing `x` to the looped array returns each item with each loop.
}

console.log("\n");

for (i in myArray2) {
	// the value `x` with each loop is each index of the array items within the array.
	console.log(myArray2[i][0], myArray2[i][1]);
}

console.log("\n");

for (i in person) {
	console.log(i); // Returns each object property of the `person` object with each loop.
}

console.log("\n");

for (i in person) {
	console.log(person[i]); // Returns each object property value of the `person` object with each loop.
}
