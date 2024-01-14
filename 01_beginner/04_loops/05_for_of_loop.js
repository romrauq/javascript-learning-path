const myArr = ["Kwesi", "James", "Steven", "Frank"];
const myArr2 = [
	["Jane", 6],
	["Felicia", 7],
	["Dorothy", 6],
	["Whitney", 6],
];
//-------------------------------------------------------------------------------------------------------
// for...of will returns each value of each index of an array.
// for...of loops only work with iterable objects like such as arrays, map and set.
// for...of loops do not work with objects because objects are not iterable.

for (x of myArr) {
	console.log(x);
}

for (x of myArr2) {
	console.log(x);
}
