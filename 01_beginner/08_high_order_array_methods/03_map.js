// The .map() method creates a new array using the specifications given and allows for the manipulation of each item.
// Multiple .map() methods can be chained onto each other to perform further manipulations of each array item value.
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
const ages = [3, 6, 7, 13, 17, 19, 21, 25, 28];

let mySchools = schools
	.map(function (school) {
		return school.name;
	})
	.map(function (name) {
		return name + " (Attended)"; // Appends to each previous resultant mapped item string.
	});
console.log(mySchools);

let schoolDuration = schools.map((school) => {
	return `${school.name}: ${school.end - school.start} Years`;
});
console.log(schoolDuration);

let completionAge = schools.map((school) => `${school.name}: Age: ${school.end - 1991}`);
console.log(completionAge);

let doubledAges = ages
	.map(function (age) {
		return age - 1; // Subtracts 1 from each array item.
	})
	.map(function (odd) {
		return odd * 2; // Multiplies the subtracted result of the array item by 2.
	});
console.log(doubledAges);
