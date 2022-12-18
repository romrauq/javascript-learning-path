// TOPIC: Ignoring case sensitivity While matching using the "i" flag.

// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let myRegex = /FREECOdeCamp/i;
let result = myRegex.test(myString);

console.log(result); // returns true
