// TOPIC: Create strings using template literals.

// A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

const hunter = {
	name: "Hisoka Morrow",
	age: "25",
};

const greeting = `My favourite Hunter is ${hunter.name}! He is ${hunter.age} years old.`;

console.log(greeting);

// A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string.
// Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings.
// The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }.
// Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.
