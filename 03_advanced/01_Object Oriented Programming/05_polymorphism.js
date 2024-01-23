// Polymorphism is the act of redefining a method inside a derived child class of a parent class.

class Animal {
	constructor(name) {
		this.name = name;
	}

	makeSound() {
		console.log("*Generic animal sound*");
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	makeSound() {
		console.log("*Woof Woof!*"); // Overiding the method action of the child class
	}
}

class Pig extends Animal {
	constructor(name) {
		super(name);
	}

	makeSound() {
		super.makeSound(); // keyword `super` can be used to call the parent's class method `makeSound()`
		console.log("*Oink Oink!*"); // Overiding the method action of the child class
	}
}

let animal1 = new Animal("Unknown Animal");
let dog1 = new Dog("Fido");
let pig1 = new Pig("Pigly");

animal1.makeSound();
dog1.makeSound();
pig1.makeSound();
