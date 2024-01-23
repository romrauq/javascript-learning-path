// Items in a Queue are first in, first out.
function priorityQueue() {
	let collection = [];
	this.print = function () {
		console.log(collection);
	};

	// Adding a new item to the (end of the) queue object:
	this.add = (new_item) => {
		if (this.isEmpty()) {
			collection.push(new_item);
		} else {
			let added = false;
			for (let i = 0; i < collection.length; i++) {
				if (new_item[1] < collection[i][1]) {
					collection.splice(i, 0, new_item);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(new_item);
			}
		}
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
