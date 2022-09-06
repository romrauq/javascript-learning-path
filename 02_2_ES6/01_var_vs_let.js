function checkScope() {
	// var myVar = "Function scope.";
	let myVar = "Function scope.";
	if (true) {
		let myVar = "Block/local scope.";
		console.log("Variable's scope is: ", myVar);
	}
	console.log("Variable's scope is: ", myVar);
	return myVar;
}

checkScope();

// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
