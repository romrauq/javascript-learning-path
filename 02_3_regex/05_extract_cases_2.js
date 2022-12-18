// TOPIC: Find More Than the First Match

// To search or extract a pattern that appears more than once, use the global search flag "g".

let myString = "Twinkle, twinkle, little star";
let myRegex = /twinkle/gi;
let result = myString.match(myRegex);

console.log(result);
