// As seen in the previous module, const declaration alone doesn't really protect your data from mutation.
// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

let myObj = {
	name: "FreeCodeCamp",
	review: "Awesome",
};

Object.freeze(myObj);
myObj.review = "bad";
myObj.newProp = "Test";

console.log(myObj); // Will (always) return { name: 'FreeCodeCamp', review: 'Awesome' }

// Practice Challenge:

// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.
// You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14,
	};
	// Only change code below this line
	Object.freeze(MATH_CONSTANTS);

	// Only change code above this line
	try {
		MATH_CONSTANTS.PI = 99;
	} catch (ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);
