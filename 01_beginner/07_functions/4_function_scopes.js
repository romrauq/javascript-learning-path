// Scopes are what is refered to when...
// Local scoped variable can only be used within the scope in which they are created.
// Global scoped variables can be used globally and every function can have access to its value.

// Variables created in the global scope:
let firstName = "John"; // Global scoped variable
let lastName = "Doe"; // Global scoped variable
let fullName = firstName + " " + lastName; // Global scoped variable
let femme = "Henrietta"; // Global scoped variable

function myFunction() {
	// The variables & their values created within this function block are local to the scope:
	let firstName = "James"; //	firstName's value has been reassigned within this local scope.
	let lastName = "Quist"; // lastName's value has been reassigned within this local scope.
	let fullName = firstName + " " + lastName;

	console.log(fullName); // "James Quist" will be logged since the values of its variable concatenations were reassigned.
	console.log(femme); // "Henrietta" will be logged since the value of crush in the global scope remained unchanged.
}

console.log(fullName); // returns the global values "John Doe"
myFunction(); // returns the local values "James Quist"
