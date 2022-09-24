// TOPIC: Reuse JavaScript Code Using import

import { deduct, multiply, divide } from "./20_export";

console.log(deduct(19, 5));
console.log(multiply(2, 5));
console.log(divide(15, 3));

// import * as myCalculations from "./20_export";

// console.log(myCalculations.deduct(19, 5));
// console.log(myCalculations.multiply(2, 5));
// console.log(myCalculations.divide(15, 3));
