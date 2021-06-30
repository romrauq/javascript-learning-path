count = 0;
storage = {};

// Adding a value to the end of a stack:
let addItem = (value) => {
	storage[count] = value;
	count++;
};

// Removing an item from the end of the stack:
let removeItem = () => {
	if (count === 0) {
		return undefined;
	}

	count--;
	let result = storage[count];
	delete storage[count];
	console.log("Item Removed!");
	return result;
};

// Outputting the value of the last item in a stack:
let peek = () => {
	console.log("Last Item: ", storage[count - 1]);
};

// Checking the size of the stack:
let size = () => {
	console.log("Stack Size: ", count);
};

addItem(1);
addItem(3);
addItem(5);
peek();
size();
removeItem();
peek();
size();
