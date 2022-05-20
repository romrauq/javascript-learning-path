// The .reduce() method is used to run scripts concurrently on array item.
// Can be used to sum all integer array items to get the total sum of all integers within an array.
// Can also be used to concatenate items to return a complete string of all string items in an array.
// The .reduce() method takes two parameters, the function & the initial value of the combined result.
// Its function also takes two parameters, the combined result of the & the array item.

const studentDetails = [
	{ name: "Kofi", age: 12 },
	{ name: "Amina", age: 3 },
	{ name: "Samuel", age: 10 },
	{ name: "Aba", age: 6 },
	{ name: "Daniel", age: 17 },
];

const numArray = [5, 15, 1, 22, 56, 74, 33, 21, 17, 55, 2, 5, 33, 91, 54];

let summedResult = numArray.reduce(function (total, item) {
	return (total += item);
}, 0);
console.log(summedResult);

let studentList = studentDetails.reduce(function (totalString, student) {
	return (totalString += student.name + ", ");
}, "");

console.log(studentList);
