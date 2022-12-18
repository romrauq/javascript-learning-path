// TOPIC: Match Characters that Occur Zero or More Times.

// There's also an regular expression option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// NB: Any letter in a regex expression that is followed by a * does not have to occur in the string tested whereas any letter in a regex expression followed by a + must occur in a string at least once, as shown below:

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
