// Defining an arrow function that has parameters (first method):
let productFunction = (a, b) => {
	return a * b;
};

// Defining a concise arrow function that has parameters(second method):
let productFunction2 = (a, b) => a * b;
// The "return" key word is removed along with the curly brackets of the function.
// The value of what is evaluated after the arrow of the functon is returned by default.

// Defining an even more concise arrow function with parameters (third method):
let isPositive = (number) => number >= 0;
// The brackets that hold the parameter "number" can be removed entirely as well.
// NB: The function  has brackets around the function's argument value since my code editor adds brackets to it upon saving the file.
// It ought to read: `isPositive = number => number >= 0;`

console.log(productFunction(7, 3)); // Calling the arrow function with passed arguments.
console.log(productFunction2(10, 4)); // Calling the arrow function with passed arguments.
console.log(isPositive(3)); // Calling the arrow function with passed arguments.
