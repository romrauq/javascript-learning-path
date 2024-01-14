// Defining a main (super) class:
class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	// Defining class method named `getSummary`:
	getSummary() {
		return `${this.name} was written by ${this.author} and was first published in ${this.year}`;
	}
}

// Defining a (sub)class of the main `Book` class named `Comic`:
class Comic extends Book {
	constructor(name, author, year, artist) {
		super(name, author, year); // Adds existing properties of the (super) "Book" class
		this.artist = artist; // defines the value assignment of the additional "artist" property of the "Comic" subclass.
	}
}

let comic = new Comic("Jupiter's Legacy", "Mark Millar", 2015, "Lou Banderas");
console.log(comic);
console.log(comic.getSummary()); // The method of the super class automatically works for the subclass.
