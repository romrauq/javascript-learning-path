// Creating Objects using an object constructor function:
// NOTE! The object class constructor function name should always begin with a capital letter.

// Defining a constructor function named "Person":
function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	// Defining a method for this object:
	this.ageStatement = `${this.firstName} ${this.lastName} is ${this.age} years old`;
}

// Adding a prototype method to the "Person" constructor :
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// Adding another prototype to "Person" constructor:
Person.prototype.editAge = function (age) {
	this.age = age;
	this.ageEdited = true; // the key "ageEdited" Boolean is added to the object is is used on and assigns the boolean true to that key.
};

// Instantiating a new person object using the "Person" constructor function:
let person1 = new Person("Evans", "Gardner", 34);

//  Modifying the age key value of "person1" object using prototype method "editAge()":
person1.editAge(36);

// Logging object to console:
console.log(person1);
