// TOPIC: Use export to Share a Code Block

// Exporting a single function;
export const add = (x, y) => {
	return x + y;
};

const deduct = (x, y) => {
	return x - y;
};

const multiply = (x, y) => {
	return x * y;
};

const divide = () => {
	return x / y;
};

// Exporting multiple functions:
export { deduct, multiply, divide };
