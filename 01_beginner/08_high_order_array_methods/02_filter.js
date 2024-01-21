// The .filter() function is used to filter specified array items to create a new array based on a condition(s).

const studentAges = [
	{ name: "Kofi", age: 33 },
	{ name: "Sam", age: 43 },
	{ name: "Bill", age: 87 },
	{ name: "Jane", age: 62 },
	{ name: "Kwesi", age: 17 },
	{ name: "Jill", age: 32 },
	{ name: "Smith", age: 21 },
	{ name: "Anderson", age: 25 },
	{ name: "Kano", age: 28 },
];

// .filter() method with regular function usage:
const youth = studentAges.filter(function (student) {
	if (student.age <= 25) {
		return true;
	}
});

console.log("Under 25:", youth, "\n"); // returns an array containing filtered objects.

// .filter() method with arrow function usage:
const middleAged = studentAges.filter((students) => {
	if (students.age > 25 && students.age <= 60) {
		return true;
	}
});

console.log("Over 25 & Under 60:", middleAged, "\n"); // returns an array containing filtered objects.

// .filter() method with a more concise arrow function usage:
const elderly = studentAges.filter((student) => student.age >= 60);

console.log(elderly); // returns an array containing filtered objects.
