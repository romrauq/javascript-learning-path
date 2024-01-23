// Items in a Stack are last in, first out.
let Stack = function () {
	this.count = 0;
	this.storage = {};

	// Adding a new item to (the end of a) stack:
	this.addItem = (value) => {
		this.storage[this.count] = value;
		this.count++;
	};

	// Removing an item from (the end of) the stack:
	this.removeItem = () => {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	// Returning the last item in the stack:
	this.peek = () => {
		return this.storage[this.count - 1];
	};

	// Checking the size of the stack:
	this.size = () => {
		return this.count;
	};
};

let myStack = new Stack();
myStack.addItem(1);
myStack.addItem(2);
myStack.addItem(3);
// console.log(myStack.peek());
console.log(myStack.size());
// myStack.removeItem();
// console.log(myStack.peek());
