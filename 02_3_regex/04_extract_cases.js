// TOPIC: Extract Matches

// You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Note that the .match() syntax is the "opposite" of the .test() method.

// Apply the .match() method to extract the string 'coding".
let myString = "Extract the word coding from this string.";
let myRegex = /coding/;
let result = myString.match(myRegex);

console.log(result);
