// TOPIC: Import a Default Export.

// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). "add" here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

import addition from "./22_export_default";

console.log(addition(4, 18));
