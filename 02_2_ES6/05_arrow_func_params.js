// Just like a regular function, you can pass arguments into an arrow function:
const doublerFunction = (num) => {
	num * 2;
};

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted:
const triplerFunction = (num) => num * 3;

// More than one argument can be passed into a function:
const multiplierFunction = (num_1, num_2) => {
	num_1 * num_2;
};

// Practice Challenge:
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
var myConcat = function (arr1, arr2) {
	return arr1.concat(arr2);
};

const myConcat = (arr1, arr2) => {
	return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
