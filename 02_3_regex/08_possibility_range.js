// TOPIC: Match letters of the Alphabet.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

let ratString = "rat";
let catString = "cat";
let batString = "bat";
let eatString = "eat";

let myRegex = /[a-e]at/g;

console.log(ratString.match(myRegex)); // Returns null
console.log(catString.match(myRegex)); // Returns ["cat"]
console.log(batString.match(myRegex)); // Returns ["bat"]
console.log(eatString.match(myRegex)); // Returns ["eat"]

// NB: Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
