// The "const' declaration has many use cases in modern JavaScript.

// Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.
// Using the const declaration only prevents reassignment of the variable identifier.

// TEST:
// An array is declared below as "const myVar = [5, 7, 2]".
// Change the array values to [2, 5, 7] using various element assignments.

const myVar = [5, 7, 2];
console.log(myVar);

function editInPlace() {
	myVar[0] = 2;
	myVar[1] = 5;
	myVar[2] = 7;
}

editInPlace();
console.log(myVar);
