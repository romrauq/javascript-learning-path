// Arrow functions handle the "this" keyword differently than regular functions.
// Standard functions (re)define the value of "this" based on the scope where it is called/executed.
// Whereas arrow functions define "this" using the scope in which the arrow function was created.

class Person {
	constructor(name) {
		this.name = name;
	}

	printNameFunction() {
		setTimeout(function () {
			console.log(this.name);
		}, 100);
	}

	printNameArrow() {
		setTimeout(() => {
			console.log(this.name);
		}, 100);
	}
}

let person1 = new Person("James");
person1.printNameFunction(); // Returns "undefined".

// In the printNameFunction method, the function passed to setTimeout is a regular function, not an arrow function. Regular functions have their own this context, which means that when the function is executed by setTimeout, the value of this is determined by how the function is called, and it loses its reference to the instance of the Person class.

person1.printNameArrow(); // Value of name in the local scope of the function's execution so "James" is returned.
// "James" will be logged because "this" refers to the local scope the arrow function is contained.
