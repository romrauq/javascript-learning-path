// TOPIC: Match Single Character with Multiple Possibilities

// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, beg, bog & bug but not big. You can create the regex /b[aeou]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bagString = "bag";
let bigString = "big";
let begString = "beg";
let bogString = "bog";
let bugString = "bug";

let myRegex = /b[aeou]g/g;

console.log(bagString.match(myRegex)); // Returns ["bag"]
console.log(begString.match(myRegex)); // Returns ["beg"]
console.log(bigString.match(myRegex)); // Returns null
console.log(bogString.match(myRegex)); // Returns ["bog"]
console.log(bugString.match(myRegex)); // Returns ["bug"]
