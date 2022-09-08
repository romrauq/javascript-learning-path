// TOPIC: Use Destructuring Assignment to Extract Values from Objects

// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

const user = { id: 0011456, name: "John Doe", age: 34 };

const name = user.name;
const age = user.age;
// name would have a value of the string "John Doe", and age would have the value of the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { myName, myAge } = user;

// Again, myName would have a value of the string "John Doe", and myAge would have the number 34.
// Here, the myName and myAge variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
