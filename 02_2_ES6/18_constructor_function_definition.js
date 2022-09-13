// TOPIC: Use class Syntax to Define a Constructor Function

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

// Definining the constructor function:
class Hero {
	constructor(name) {
		this.name = name;
	}
}

// Instantiating new object using class:
const batman = new Hero("Bruce Wayne");
console.log(batman.name);
