// The .includes() method checks if a passed argument value is contained within an array and returns a boolean.
// The boolean true is returned when the passed argument's value is in the array and false if it is not within the array.

const numArray = [5, 15, 1, 22, 56, 74, 33, 21, 17, 55, 2, 5, 33, 91, 54];

let includesFiftyFive = numArray.includes(55);
let includesThree = numArray.includes(3);

console.log(includesFiftyFive); // Returns true
console.log(includesThree); // Returns false
