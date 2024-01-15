// An Immediately Invoked Function Expression is a function that is executed immediately after it has been created.
// An "IIFE" is created by wrapping a function in brackets & adding a function execution closed bracket at the end of the enclosed function.*/

// Creating an Immediately invoked function expression :
let snapFunction = (function () {
	console.log(
		"This text is returned by an immediately invoked function expression assigned to a variable."
	);
})(); // This function is immediately invoked after its creation.

// Defining an anonymous Immediately invoked function expression:
(function () {
	console.log("This text is returned by an anonymous immediately invoked function expression.");
})();
