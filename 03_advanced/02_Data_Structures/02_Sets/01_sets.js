// Items in Sets are all unique and have no duplicates.
function mySet() {
	//The variable collection to hold the set:
	let collection = [];

	// This method will check for the precense of an element and return true or false:
	this.has = function (element) {
		return collection.indexOf(element) !== -1;
	};

	// This method will return all the values in the set:
	this.values = function () {
		return collection;
	};

	// This method will add an element to the set:
	this.add = function (element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};

	// This method will remove an element from a set:
	this.remove = function (element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};

	// This method will return the size of the collection:
	this.size = function () {
		return collection.length;
	};

	// This method will return the union of two sets:
	this.union = function (otherSet) {
		let unionSet = new mySet();
		let firstSet = this.values();
		let secondSet = otherSet.values();
		firstSet.forEach(function (item) {
			unionSet.add(item);
		});
		secondSet.forEach(function (item) {
			unionSet.add(item);
		});
		return unionSet;
	};

	// This method returns the intersection of two sets as a new set:
	this.intersection = function (otherSet) {
		let intersectionSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach(function (item) {
			if (otherSet.has(item)) {
				intersectionSet.add(item);
			}
		});
		return intersectionSet;
	};

	// This method returns the difference between two sets as a new set:
	this.difference = function (otherSet) {
		let differenceSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach(function (item) {
			if (!otherSet.has(item)) {
				differenceSet.add(item);
			}
		});
		return differenceSet;
	};

	//This method will test if a set is a subset of another set:
	this.subset = function (otherSet) {
		let firstSet = this.values();
		return firstSet.every(function (item) {
			return otherSet.has(item);
		});
	};
}

let set1 = new mySet();
let set2 = new mySet();
let set3 = new mySet();

set1.add("a");
set1.add("b");
set1.add("c");
set1.add("d");
set2.add("a");
set2.add("c");
set3.add("e");
set3.add("f");
set3.add("g");
console.log(set1.values());
console.log(set2.values());
console.log(set3.values());
console.log(set1.size());
console.log(set2.size());
console.log(set3.size());
console.log(set1.intersection(set2).values());
console.log(set3.remove("g"));
console.log(set1.union(set3).values());
console.log(set1.difference(set2).values());
console.log(set1.difference(set3).values());
console.log(set2.subset(set1));
console.log(set2.subset(set1));
console.log(set3.subset(set1));
