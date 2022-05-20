// The .some() method checks for a specified condition within an array
// Its function returns true if one/some of the items in the specified array matches the function evaluation.
// Its function also returns false if none of the items within the array match the function evaluation.
const studentDetails = [
	{ name: "Kofi", age: 12 },
	{ name: "Amina", age: 3 },
	{ name: "Samuel", age: 10 },
	{ name: "Aba", age: 6 },
	{ name: "Daniel", age: 17 },
];

let underTen = studentDetails.some(function (student) {
	return student.age < 10;
});
let overTwenty = studentDetails.some(function (student) {
	return student.age > 20;
});
console.log(underTen); // Returns "true" since some of the item ages are under 10.
console.log(overTwenty); // Returns "false" since none of the item ages are over 20
