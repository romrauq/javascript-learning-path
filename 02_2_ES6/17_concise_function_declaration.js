// TOPIC: Write Concise Declarative Functions with ES6.

// Regular function declaration:
const hunter = {
	name: "Killua Zoldyck",
	greeting: function () {
		return `Hello my name is ${this.name}`;
	},
};

// With ES6, you can remove the function keyword and colon altogether when defining functions within objects:
const hunter2 = {
	name: "Gon Freecs",
	greeting() {
		return `Hello my name is ${this.name}`;
	},
};

console.log(hunter.greeting()); // Returns "Hello my name is Killua Zoldyck"
console.log(hunter2.greeting()); // Returns "Hello my name is Gon Freecs"
