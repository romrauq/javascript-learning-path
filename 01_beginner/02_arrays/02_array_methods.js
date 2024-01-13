let namesArray = ["Will", "James", "Ben", "Adam", "Mary", "Reginald"];
let petsArray = ["Fido", "Spot", "Rover", "Cereberus"];

// Array methods:
namesArray.unshift("Bismark"); // Adds an item to the start of an array.
// namesArray returns: ['Bismark', 'Will', 'James', 'Ben', 'Adam', 'Mary', 'Reginald']

namesArray.shift(); // Removes 1st element from an array & returns it. If the array is empty, undefined is returned & the array is not modified.
// namesArray now returns: ['Will', 'James', 'Ben', 'Adam', 'Mary', 'Reginald']

namesArray.pop(); // Removes OR "pops off" and returns the last item from the specified/chained array.
// namesArray now returns: ['Will', 'James', 'Ben', 'Adam', 'Mary']

namesArray.push("Melorie"); // Adds an new item to the end of an array.
// namesArray now returns: ['Will', 'James', 'Ben', 'Adam', 'Mary', "Melorie"]

namesArray.reverse(); // Reverses the order of items contained within an array.
// namesArray now returns: ['Melorie', 'Mary', 'Adam', 'Ben', 'James', 'Will']

namesArray.sort(); // sorts (in ascending numerical & then alphabetical order) the items contained within an array.
// namesArray now returns: ['Adam', 'Ben', 'James', 'Mary', 'Melorie', 'Will']

let namePets = namesArray.concat(petsArray); // Concatenates the items of a passed array  onto the chained array and returns a new  array with concatenated items.
console.log(namePets);
// namePets returns: ['Adam', 'Ben', 'James', 'Mary', 'Melorie', 'Will', "Fido", "Spot", "Rover", "Cereberus"]

let namesString = namesArray.join(); // Joins all items contained within an array into a single string.
console.log(namesString, "\n");
// namesString returns: 'Adam,Ben,James,Mary,Melorie,Will'

console.log("namesArray before slice: ", namesArray);
// namesArray returns: ['Adam', 'Ben', 'James', 'Mary', 'Melorie', 'Will']

let slicedNames = namesArray.slice(2, 5); // Returns a new array by slicing from a start index specified & ending before the specified second argument index.
console.log("slicedNames: ", slicedNames);
// slicedNames returns: ['James', 'Mary', 'Melorie']

console.log("namesArray after slice: ", namesArray, "\n");
// namesArray still returns: ['Adam', 'Ben', 'James', 'Mary', 'Melorie', 'Will']

console.log("namesArray before splice: ", namesArray);
// namesArray returns: ['Adam', 'Ben', 'James', 'Mary', 'Melorie', 'Will']

let splicedNames = namesArray.splice(1, 2); // Returns a new array by splicing items from a start index to a specified number of indexes afterwards.
console.log("splicedNames: ", splicedNames);
// splicedNames returns: ['Ben', 'James']

console.log("namesArray after splice: ", namesArray);
// namesArray returns: ['Adam', 'Mary', 'Melorie', 'Will']
