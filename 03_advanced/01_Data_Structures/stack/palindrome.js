let stack = [];
let word = "xanax";
let rword = "";

// Put the letters of "word" into stack:
for (let i = 0; i < word.length; i++) {
	stack.push(word[i]);
}

// pop off the last item of the stack to the add to the "rword" variable:
for (let i = 0; i < word.length; i++) {
	rword += stack.pop();
}

if (rword === word) {
	console.log(word + " is a palindrome");
} else {
	console.log(word + " is not a palindrome");
}
