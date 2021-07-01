let queue = [1, 2, 3, 5, 8];

// Adding a new item to the queue object:
let addItem = (item) => {
	queue.push(item);
};

// Removing an item (first item) from a queue object:
let removeItem = () => {
	queue.pop(queue[0]);
};

// Viewing the next in line/first queue item:
let viewFirst = () => {
	console.log(queue[0]);
};

// Viewing the last item in a queue object:
let viewLast = () => {
	console.log(queue[queue.length - 1]);
};

// Viewing all the queue object items:
let viewQueue = () => {
	console.log(queue);
};

addItem(13);
addItem(21);
viewFirst();
viewLast();
viewQueue();
