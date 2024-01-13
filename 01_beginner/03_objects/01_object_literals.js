// Creating an new Object using object literal notation:

// A variable is defined to contain its object properties and values:
let character = {
	firstName: "Killua",
	lastName: "Zoldyck",
	age: 13,
};

console.log(character);

// Object.keys(arg) returns an array containing items of the keys of the passed object.
console.log(Object.keys(character));

// Object.values(object_name) returns an array containing the values of the passed object.
console.log(Object.values(character));

console.log(typeof character.age);
