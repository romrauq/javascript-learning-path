const randomNumbers = (_range, _limit) => {
	// _range: How many items to be generated.
	// _limit: The highest number value to be possibly generated in array.

	let last = _limit + 1;
	return Array.from({ length: _range }, () => Math.floor(Math.random() * last));
};

// In this function, Array.from() is used to create an array of the desired length (_range), and the Math.floor(Math.random() * _limit) is used to generate a random number between 0 and {_limit - 1} , as the array element of each index.

// This will generate an array of {_range} numbers and it will be random on every run.

module.exports = { randomNumbers };
