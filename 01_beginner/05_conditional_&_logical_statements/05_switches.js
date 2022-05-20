// Switches are used to test for multiple conditions.
let num = 20;

switch (num) {
	case 10: // (if num === 10)
		console.log("The number is 10.");
		break;
	case 20: // (if num === 20)
		console.log("The number is 20.");
		break;
	case 30: // (if num === 30)
		console.log("The number is 30.");
		break;
	default:
		// (default statement to be run if condition not found in above cases.)
		console.log("Not a valid case number...");
		break;
}
