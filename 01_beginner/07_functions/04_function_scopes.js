// Scopes are what is refered to when...
// Local scoped variable can only be used within the scope in which they are created.
// Global scoped variables can be used globally and every function can have access to its value.

// Variables created in the global scope:
let firstName = "John"; // Initialising a global variable.
let lastName = "Doe"; // Initialising a global variable.
let fullName = firstName + " " + lastName; // Initialising a global variable.

function myFunction() {
	// Variables created within this function are local to this scope.
	let firstName = "James"; //	Variable value assigned as "James" within this (local) scope.
	let lastName = "Quist"; //	Variable value assigned as "Quist" within this (local) scope.
	let fullName = firstName + " " + lastName;

	return "Fullname (Local): " + fullName;
}

console.log("Fullname (Global):", fullName); // Returns the global value of `fullname`
console.log(myFunction()); // Returns the local value of `fullname`
