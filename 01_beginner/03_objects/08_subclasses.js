// Main (super) class:
class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.name} was written by ${this.author} and was first published in ${this.year}`;
	}
}

// Creating a new subclass "Comic" of the main "Book" class:
class Comic extends Book {
	constructor(name, author, year, artist) {
		super(name, author, year); // Adds the existing properties of the (super) "Book" class
		this.artist = artist; // defines the value assignment of the additional "artist" property of the "Comic" subclass.
	}
}

let comic1 = new Comic("Jupiter's Legacy", "Mark Millar", 2015, "Lou Banderas");
console.log(comic1);
console.log(comic1.getSummary()); // The method of the super class automatically works for the subclass.
