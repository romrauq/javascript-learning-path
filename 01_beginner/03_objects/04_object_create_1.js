const bookPrototypes = {
	getBookSummary: function () {
		return `${this.title} was written by ${this.author} and was first published in ${this.year}`;
	},
	getBookAge: function () {
		let year = new Date().getFullYear;
		let age = year - this.year;
		return `${this.name} is ${age} years old`;
	},
};

// Creating a new object using Object.create() function:
// The "bookPrototypes" variable is passed as an argument of the Object.create() method.
const book1 = Object.create(bookPrototypes);
book1.title = "BlindSight";
book1.author = "Peter Watts";
book1.year = 2010;

console.log(book1);
console.log(book1.getBookSummary());
