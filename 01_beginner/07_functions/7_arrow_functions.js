// An Arrow function is what is refered to when a function is written using the ES6 JavaScript syntax.
//-------------------------------------------------------------------------------------------------------
// Creating a basic arrrow function with code braces:
let arrowFunction = () => {
	alert("You have created an arrow function!");
};
// When creating arrow functions the "function" key word isn not used when declaring the function.
// Instead, the function is assigned to a variable and the variable name is what is used when calling the funtion.
arrowFunction(); // Calls/executes the created arrow function.
//-------------------------------------------------------------------------------------------------------
// Shorter Syntax for creating arrow functions without code braces:
let arrowFunction2 = () => alert("You created a second arrow function");
// Curly brackets are removed from the function and the function statement now has a short inline look.
// Statements that come after the arrow are returned by the function by default.
arrowFunction2();
