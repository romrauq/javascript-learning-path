num1 = 80;
num2 = 15;

if (num1 < num2) {
	// The statement(s) in this scope will run if the above condition (num1 < num2) returns true.
	console.log(`${num1} is less than ${num2}`);
} else {
	// The statement(s) in this scope will be executed instead if the previous "if" condition above returned false.
	console.log(`${num1} is greater than ${num2}`);
}
// "80 is greater than 15" will be logged into the console area.
