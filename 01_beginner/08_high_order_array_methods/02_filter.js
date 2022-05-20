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

// .filter() method usage:
const youth = studentAges.filter(function (student) {
	if (student.age <= 25) {
		return true;
	}
});

console.log(youth); // returns an array containing filtered objects.

const middleAged = studentAges.filter((students) => {
	if (students.age > 25 && students.age <= 60) {
		return true;
	}
});

console.log(middleAged); // returns an array containing filtered objects.

const elderly = studentAges.filter((student) => student.age >= 60);

console.log(elderly); // returns an array containing filtered objects.
