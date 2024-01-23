// Parent class used to create a child class

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	description() {
		return `${this.name} is ${this.age} years old.`;
	}
}

// The `extends` keyword is used to create a child class that inherits from a parent class:
class Doctor extends Person {
	constructor(name, age, experience) {
		// Inherited properties of the child class from the parent class.
		super(name, age); // `super` calls the constructor of the parent class.

		// custom properties of child class:
		this.experience = experience;
	}

	// Defining a method unique to this child class:
	operate() {
		return `${this.name} can perform surgery.`;
	}
}

class Programmer extends Person {
	constructor(name, age, skills) {
		super(name, age);
		this.skills = skills;
	}

	// Defining a method unique to this child class:
	debug() {
		return `${this.name} is a programmer has ${3} skills and can debug code!`;
	}
}

let person1 = new Person("John", 30);
let doctor1 = new Doctor("Frankenstien", 35, 7);
let programmer = new Programmer("Austin", 22, 3);

console.log(person1);
console.log(doctor1.operate());
console.log(programmer.debug());

const doctors = [
	new Doctor("Dr. Hannibal", 52, 25),
	new Doctor("Dr. Strange", 38, 20),
	new Doctor("Dr. Sleep", 40, 2),
];

// console.log(doctors);
for (let doctor of doctors) {
	console.log(doctor.operate());
}
