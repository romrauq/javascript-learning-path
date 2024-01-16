// Arrow functions, do not have their own this binding. Instead, they inherit the `this` value from the enclosing scope at the time they are defined. This is sometimes referred to as "lexical scoping" or "lexical this":

function ArrowFunction() {
	this.value = 42;

	this.getValue = () => {
		console.log(this.value);
	};
}

const obj = new ArrowFunction();
const getValueArrow = obj.getValue;

// In arrow functions, 'this' is inherited from the enclosing scope (ArrowFunction)
obj.getValue(); // Output: 42

// 'this' is still bound to the ArrowFunction instance, even when invoked as a standalone function
getValueArrow(); // Output: 42
