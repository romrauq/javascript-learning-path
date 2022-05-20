const myArr = ["Kwesi", "James", "Steven", "Frank"];
const myArr2 = [
	["Jane", 6],
	["Felicia", 7],
	["Dorothy", 6],
	["Whitney", 6],
];
let person = { name: "John", age: 34, occupation: "Fixer" };
//-------------------------------------------------------------------------------------------------------
// for...in loop will loop through property the names of an object/array.
// In the case of an array the for in loop will return the index & (any user defined property names) of items in the array.
// It loops through innumerable properties.

for (x in myArr) {
	console.log(x); //This will return the index of each array item in the array.
}

for (x in person) {
	console.log("Property name: " + x); //This will return the property name of each object item.
}

for (x in person) {
	console.log("Property value: " + person[x]); //This is how to return the property values of an object using the for in loop.
}
