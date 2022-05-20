let yourName = "Steve";

if (yourName == "Harry") {
	console.log("Expecto Patronum " + yourName); // This statement will run if the above statement is true.
} else if (yourName == "Mark") {
	console.log("Oh hi " + yourName); // This statement will run if the above statement is true.
} else if (yourName == "Steve") {
	console.log("Hello " + yourName); // This statement will run if the above statement is true.
} else {
	let yourName = prompt("what is your yourName?"); // If none of the above statement is true, this will run as default.
	console.log("Your yourName is " + yourName);
}
// "Hello Steve" will be logged to the console.
