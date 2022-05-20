// Creating a new Date object:
const dateObject = new Date();

// Returning date values:
let day = dateObject.getDay(); // Returns numerical value for the day of the week.
let month = dateObject.getMonth(); //Returns zero index nemerical value of the current month.
let year = dateObject.getFullYear(); //Returns the current year numerical value.
let currentDateString = dateObject.toDateString(); //Converts date object to date string.

// Returning time values
let hour = new Date().getHours(); // Returns the current hour value.
let min = new Date().getMinutes(); // Returns the current minute(s) value.
let sec = new Date().getSeconds(); // Returns the current second(s) value.

console.log(currentDateString); // Logs string of the current date.
