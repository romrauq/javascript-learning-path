// Defining a prototype for book objects, this prototype will be passed into the Object.create() method when creating a new object to allow the new object inherit its methods.
const bookPrototypes = {
	getBookSummary: function () {
		return `${this.title} was written by ${this.author} and was first published in ${this.year}.`;
	},
	getBookAge: function () {
		let currentYear = new Date().getFullYear();
		let currentAge = currentYear - this.year;
		return `The book ${this.title} is ${currentAge} years old.`;
	},
};

// Creating a new object using Object.create() method passing the object prototype variable as an argument to allow created object to inherit `bookPrototypes` methods:
const book1 = Object.create(bookPrototypes);
book1.title = "BlindSight"; // Assigning value to `title` key.
book1.author = "Peter Watts"; // Assigning value to `author` key.
book1.year = 2010; // Assigning value to `year` key.

// Logging to console:
console.log(book1);
console.log(book1.getBookSummary());
console.log(book1.getBookAge());
