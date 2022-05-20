// The .forEach() method loops through all items in an array (or properties in  an object)
//	and executes specified statement on each looped item.

const schools = [
	{
		name: "Jezreel Montesorri",
		category: "Nursery",
		location: "Adenta",
		start: 1994,
		end: 1997,
	},
	{
		name: "Alsyd Academy",
		location: "Dzorwulu",
		category: "Middleschool",
		start: 1997,
		end: 2004,
	},
	{
		name: "Englebert School",
		location: "Airport West",
		category: "Middleschool",
		start: 2004,
		end: 2008,
	},
	{
		name: "Saint Thomas Aquinas SHS",
		location: "Cantonments",
		category: "Secondary",
		start: 2008,
		end: 2012,
	},
	{
		name: "University of Ghana, Legon",
		location: "Legon",
		category: "Tertiary",
		start: 2012,
		end: 2016,
	},
];

// NOTE: .forEach() function method arguments:
// schools.forEach(function (item, index, entire_array) {
// Statements...
// });

// .forEach() method syntax forms:

// 1. Using a basic function with the forEach() method:
schools.forEach(function (school, index, array) {
	console.log(index, school.name);
	// console.log(array); // This will return the entire array object with each iteration.
});
//-------------------------------------------------------------------------------------------------------

// 2. Using an arrow function with the forEach() method:
schools.forEach((school) => console.log("School name: " + school.name)); //Shorthand syntax
//-------------------------------------------------------------------------------------------------------

// 3. Using an arrow function with curly brackets to add multiple statements within the arrow function:
schools.forEach((school) => {
	console.log(school.name, "-", school.category);
});
//-------------------------------------------------------------------------------------------------------

// Using the forEach() function to add each of the array items from one array to another empty array.
const ages = [3, 6, 7, 13, 17, 19, 21, 25, 28];
xavi = [];

ages.forEach(function (age) {
	xavi.push(age);
});
console.log(xavi);
