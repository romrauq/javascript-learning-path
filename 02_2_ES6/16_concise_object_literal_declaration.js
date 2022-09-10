// TOPIC: Write Concise Object Literal Declarations Using Object Property Shorthand

// Consider the following script:
const createObject = (x, y) => ({
	x: x,
	y: y,
});

// createObject() is a simple function that returns an object containing two properties.
// ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x.You can simply write x once, and it will be converted tox: x(or something equivalent) under the hood.

// Here is the same function from above rewritten to use this new syntax:
const createObjectNew = (x, y) => ({ x, y });
