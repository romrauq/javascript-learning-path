// TOPIC: Use Destructuring Assignment to Assign Variables from Arrays.

// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [myVar1, myVar2] = [420, 69, 419, 808, 14];
console.log(myVar1, myVar2); // Returns "420 69"

// The variable a is assigned the first value of the array, and b is assigned the second value of the array.
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [pronoun, verb, , , adjective] = ["I", "am", "crazy", "oblivious", "happy", "okay?"];
console.log(pronoun, verb, adjective); // Returns "I am happy"

// The destructuring assignement can be used to reassign variable values:
let a = 14;
let b = 77;
console.log(a, b); // Returns "14, 77"

[a, b] = [b, a];
console.log(a, b); // Returns "77, 14"
