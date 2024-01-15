// An Arrow function is what is refered to when a function is written using the ES6 JavaScript syntax.
//

// Defining a basic arrow function with code brackets (first method):
let arrowFunction = () => {
	console.log("You created a 1st arrow function!");
};
// When creating arrow functions, the keyword "function" is not used when defining the function. Instead, the function is assigned to a variable and the variable name is what is used when exectuting the function.

arrowFunction(); // Executing the arrow function.

// Defining a concise arrow function (second method):
let arrowFunction2 = () => console.log("You created a 2nd arrow function!");
// In this method, the curly brackets are not present and its code is contained within a single line. Statements that come after the arrow are returned by the function by default.

arrowFunction2(); // Executing the arrow function.
