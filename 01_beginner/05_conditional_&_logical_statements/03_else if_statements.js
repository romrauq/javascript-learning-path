let yourName = "Steve";

if (yourName == "Harry") {
	console.log("Expecto Patronum " + yourName); // This statement will run if the above statement returns true.
} else if (yourName == "Mark") {
	console.log("Oh hi " + yourName); // This statement will run if the above statement returns true.
} else if (yourName == "Steve") {
	console.log("Hello " + yourName); // This statement will run if the above statement returns true.
} else {
	let yourName = prompt("what is your yourName?"); // If none of the above statement returned true, the script in this scope will run as default.
	console.log("Your yourName is " + yourName);
}
// "Hello Steve" will be logged to the console.
