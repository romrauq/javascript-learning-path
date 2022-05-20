// Arrow functions can also be made to be anonymous functions.
// Anonymous arrow functions work best for functions that will be chained onto event listeners.

// Creating an event listener with an anonymous arrrow function:
let activate = () => console.log("I have been clicked!");

// Calling the variable that holds the funtion executes the anonymous function:
activate();
