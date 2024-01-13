// Defining a prototype for book objects, this prototype will be passed into the Object.create() method when creating a new object to allow the new object inherit its methods.
const bookPrototypes = {
	getBookSummary: function () {
		return `${this.title} was written by ${this.author} and was first published in ${this.year}`;
	},
	getBookAge: function () {
		let currentYear = new Date().getFullYear();
		let bookAge = currentYear - this.year;
		return `The book ${this.title} is ${bookAge} years old.`;
	},
};

// Another method of creating a new object using Object.create():
// The prototype object `bookPrototypes` is passed as the first argument of the Object.create() method and an object containing the key and values of the `book2` object is passed as the second argument of the Object.create() method.
const book2 = Object.create(bookPrototypes, {
	title: { value: "Echopraxia" },
	author: { value: "Peter Watts" },
	year: { value: 2015 },
});

console.log(book2); // Returns {}
// The reason console.log(book2) appears to return an empty object is because the properties of book2 are defined on its prototype (bookPrototypes).
// When you use Object.create(bookPrototypes, { ... }), the properties are assigned to the prototype, not the instance itself.

console.log(book2.getBookSummary());
console.log(book2.getBookAge());
