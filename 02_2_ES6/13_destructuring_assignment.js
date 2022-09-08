// TOPIC: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements.

// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

const [var1, var2, ...myArr] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(var1, var2); // Returns "10, 20"
console.log(myArr); // Returns "[30, 40, 50, 60, 70, 80, 90]"

// Variables var1 and var2 take the first and second values from the array.
// After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array.
// The rest element only works correctly as the last variable in the list.
// As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

// Practice Challenge:
// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
	// Only change code below this line
	const [a, b, ...arr] = list; // Change this line
	// Only change code above this line
	return arr;
}

console.log(removeFirstTwo(source)); // [ 3, 4, 5, 6, 7, 8, 9, 10]
