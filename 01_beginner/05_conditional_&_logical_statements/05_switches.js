// Switches are used to test for multiple conditions.
let num = 20;

switch (num) {
	case 10: // Similar to (if num === 10)
		console.log("The number is 10.");
		break;
	case 20: // Similar to (if num === 20)
		console.log("The number is 20.");
		break;
	case 30: // Similar to (if num === 30)
		console.log("The number is 30.");
		break;
	default:
		// This is the default scope that will run if none of the above condition returned true.
		console.log("Not a valid case number...");
		break;
}
