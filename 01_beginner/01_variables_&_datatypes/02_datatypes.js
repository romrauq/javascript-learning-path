// 1. Strings:
let str = "Hello World";
let str2 = "219";
console.log(typeof str, typeof str2); // both return "string"

// 2. Numbers:
let num = 2020;
let num2 = Infinity;
console.log(typeof num, typeof num2); // Returns "number"

// 3. Booleans:
let bool = true;
let bool2 = false;
console.log(typeof bool, typeof bool2); // Returns "boolean"

// 4. Objects:
let obj = { name: "John", age: 32 }; // The variable "obj" is an Object variable.
let arr = [1, 3, 5, "lele"]; // The variable "arr" is an Array variable.
console.log(typeof obj); // Returns "object"
console.log(typeof arr); // Also returns "object"

// 5. Null:
let nil = null;
console.log("Hello " + nil); // Returns "Hello null"
console.log(23 + nil); // Returns 23
console.log(5 * nil); // Returns 0
console.log(arr); // Returns "[1, 3, 5, "lele"]"
console.log(typeof nil); // Returns "object"

// 6. Undefined:
let noValue; // Declaring a variable without assigning it a value creates an "undefined" variable.
let notDefined = undefined; // Assigning the keyword "undefined" to a variable creates an "undefined" variable.
console.log(typeof noValue); // Returns "undefined"
console.log(typeof notDefined); // Returns "undefined"

// 7. Symbol: ??? (I havent learnt this or come across them yet, sorry.)
