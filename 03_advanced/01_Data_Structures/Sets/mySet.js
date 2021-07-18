let mySet = [];

// Adding an itemto the set:
let addItem = (item) => {
	if (!mySet.has(item)) {
		mySet.push(item);
	} else {
		return undefined;
	}
};

let removeItem = (item) => {
	if (mySet.has(item)) {
		for (let i = 0; i < mySet.length; i++) {
			if (mySet[i] === item) {
				delete mySet[i];
			} else {
				return null;
			}
		}
	}
};

let showSet = () => {
	console.log(mySet);
};

addItem(1);
addItem(2);
addItem(3);
addItem(5);
showSet();
removeItem(3);
showSet();
