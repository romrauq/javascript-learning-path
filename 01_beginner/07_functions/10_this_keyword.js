// Arrow functions handle the "this" keyword differently than standard functions.
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
person1.printNameFunction(); // Global scope of name is not defined so nothing is logged.
person1.printNameArrow(); // "James" will be logged because "this" refers to the local scope the arrow function is contained.
