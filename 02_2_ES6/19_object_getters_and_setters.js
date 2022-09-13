// TOPIC: Use getters and setters to Control Access to an Object.

// You can obtain values from an object and set the value of a property within an object using "getters" and "setters".

// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

// Created an object class constructor:
class Hero {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// created "name" property getter function:
	get getName() {
		return this.name;
	}
	// created "age" property setter function:
	set setAge(age) {
		this.age = age;
	}
	// created "age" property getter function:
	get getAge() {
		return this.age;
	}
}

// Instantiated a new Hero object:
const batman = new Hero("Bruce Wayne", 35);
console.log(batman);

// Reassigned object property value using setter function:
batman.setAge = 40;
console.log(batman);
