// The .find() method allows you to find a single item within an array.
// It returns the first object respective to the condition's boolean (true or false) response evaluated within its function.

const studentDetails = [
	{ name: "Kofi", age: 12 },
	{ name: "Amina", age: 3 },
	{ name: "Samuel", age: 10 },
	{ name: "Aba", age: 6 },
	{ name: "Daniel", age: 17 },
];

let findStudent = studentDetails.find(function (student) {
	return student.name === "Amina";
});
console.log(findStudent); // Logs {name: "Amina", age: 3}
