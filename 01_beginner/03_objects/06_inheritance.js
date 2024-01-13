// Object Inheritance allows for new object constructors to inherit the properties and prototype functions of a previously created object.

// Creating a main object constructor function:
function Book(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;
}

// Adding a prototype function to the "Book" object constructor:
Book.prototype.getSummary = function () {
	return `${this.name} was written by ${this.author} and was first published in ${this.year}`;
};

// Creating a second constructor function that inherits the properties of the "Book" constructor function:
function Comic(name, author, year, rating) {
	// The `call()` method is chained onto the "Book" class within the code block to allow the "Comic" class to inherit its properties and functions.
	Book.call(this, name, author, year); // First parameter `this` refers to the `COmic` constructor.
	this.rating = rating; // defining the unique key `rating` of the "Comic" constructor.
}

// Inheriting the prototype "getSummary()" method from the Book constructor:
Comic.prototype = Object.create(Book.prototype);

// Changing the prototype constructor name from "Book()" to "Comic()":
Comic.prototype.constructor = Comic;

// Initialising a new object named `comic1`.
let comic1 = new Comic("Multiversity", "Grant Morrison", 2015, 7.5);

// Log to console:
console.log(comic1);
console.log(comic1.getSummary());
