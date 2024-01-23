// Items in a Queue are first in, first out.
function Queue() {
	let collection = [];
	this.print = function () {
		console.log(collection);
	};

	// Adding a new item to the (end of the) queue object:
	this.add = (item) => {
		collection.push(item);
	};
	// Removing an item (first item) from a queue object:
	this.remove = () => {
		return collection.shift();
	};
	// Viewing the next in line/first queue item:
	this.front = () => {
		return collection[0];
	};
	// Viewing the last item in a queue object:
	this.last = () => {
		return collection[queue.length];
	};
	// Viewing all the queue object items:
	this.isEmpty = () => {
		return collection.length === 0;
	};
}

addItem(13);
addItem(21);
viewFirst();
viewLast();
viewQueue();
