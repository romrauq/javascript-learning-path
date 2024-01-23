// Class static methods do no require an instance of the class to be used.
// They are used by chaining them to the classes that they were defined in.
// They are normally used as helper functions of a class.

class Square {
	constructor(_width, _length) {
		this.width = _width;
		this.length = _length;
	}

	// Defining a static method:
	static isEqual(obj_1, obj_2) {
		return obj_1.width * obj_1.length === obj_2.width * obj_2.length;
	}
}

// Initializing instances of Square class:
let square_1 = new Square(5, 5);
let square_2 = new Square(7, 7);

// Using the static method with the Square class:
console.log(Square.isEqual(square_1, square_2));
