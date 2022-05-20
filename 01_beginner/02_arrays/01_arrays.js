// Arrays are used to store multiple values in a variable.
// Arrays are of the "Object" datatype.

// Array Creation Method 1:
// Creating an empty array with a constructor then assigning individual values into its indexes.
let arr1 = new Array(); // Creates an empty array.
console.log(arr1);
arr1[0] = 7; // Assigns the value 7 to the first index in the array.
arr1[1] = 2; // Assigns the value 2 to the second index in the array.
arr1[2] = 4; // Assigns the value 4 to the third index in the array.
arr1[3] = 8; // Assigns the value 8 to the fourth index in the array.
arr1[4] = 16; // Assigns the value 16 to the fifth index in the array.
console.log(arr1);
//-------------------------------------------------------------------------------------------------------

// Array Creation Method 2:
// Creating an array using an array constructor with its values passed as arguments in the constructor.
let arr2 = new Array(1, 2, 3, 4); // arr1 returns [1, 2, 3 ,4];
let arr3 = new Array("a", "b", "c", "d"); // arr3 returns ["a", "b", "c", "d"];

//-------------------------------------------------------------------------------------------------------
// Array Creation Method 3:
// Creating an array variable by initializing items directly to variable as it is created.
let arr4 = ["w", "x", "y", "z"];
//-------------------------------------------------------------------------------------------------------
