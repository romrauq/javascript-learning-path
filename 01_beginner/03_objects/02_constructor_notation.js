// Creating Objects using constructor notation:

// A "character" object is created, properties and values are assigned individually to the created object.
let character = new Object();
character.firstName = "Gon";
character.lastName = "Freeks";
character.age = 12;

console.log(character);

// Object.keys(arg) returns an array containing items of the keys of the passed object.
console.log(Object.keys(character));

// Object.values(object_name) returns an array containing the values of the passed object.
console.log(Object.values(character));

console.log(typeof character.age);
