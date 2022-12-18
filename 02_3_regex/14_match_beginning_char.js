// TOPIC: Match beginning string patterns.

// Previously, the caret character (^) was used inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
