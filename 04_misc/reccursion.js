function sum(numbers) {
	if (numbers.length === 0) {
		// base case: if the list is empty, the sum is zero
		return 0;
	} else {
		// recursive case: if the list is not empty, add the first number to the sum of the rest of the numbers
		return numbers[0] + sum(numbers.slice(1));
	}
}

console.log(sum([1, 2, 3, 4, 5])); // 15

// This function takes a list of numbers as input, and it returns the sum of all the numbers in the list. To do this, it declares a variable called sum and initializes it to zero. It then iterates over the numbers in the list and adds each one to sum. Finally, it returns the value of sum.
