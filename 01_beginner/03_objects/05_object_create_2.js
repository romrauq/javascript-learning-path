const bookPrototypes = {
	getBookSummary: function () {
		return `${this.name} was written by ${this.author} and was first published in ${this.year}`;
	},
	getBookAge: function () {
		let year = new Date().getFullYear;
		let age = year - this.year;
		return `${this.name} is ${age} years old`;
	},
};

// Another method of creating a new object using Object.create():
// 1. The bookPrototypes variable is passed as an argument within the first parameter of the Object.create() function.
// 2. The object containing the property and values of the object is passed as an argument within the second parameter of the Object.create() function.
const book2 = Object.create(bookPrototypes, {
	title: { value: "Echopraxia" },
	author: { value: "Peter Watts" },
	year: { value: 2015 },
});

console.log(book2);
