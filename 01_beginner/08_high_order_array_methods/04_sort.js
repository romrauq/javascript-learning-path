// The .sort() method uses two function parameters to create an array with sorted array items using conditions specified.
const studentAges = [
	{ name: "Kofi", age: 12 },
	{ name: "Amina", age: 3 },
	{ name: "Samuel", age: 10 },
	{ name: "Aba", age: 6 },
	{ name: "Daniel", age: 17 },
];

const ageSortDescending = studentAges.sort(function (first, next) {
	if (first.age < next.age) {
		return 1;
	} else {
		return -1;
	}
});
console.log(ageSortDescending);

const ageSortAscending = studentAges.sort((first, next) => (first.age > next.age ? 1 : -1));
console.log(ageSortAscending);

const numArray = [5, 15, 1, 22, 56, 74, 33, 21, 17, 55, 2, 5, 33, 91, 54];
// console.log(numArray);

const simpleSort = numArray.sort();
// console.log(simpleSort);

const properSort = numArray.sort((first, next) => first - next);
// console.log(properSort);
