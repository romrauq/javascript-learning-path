const randomNumbers = (_range, _end) => {
	let last = _end + 1;
	return Array.from({ length: _range }, () => Math.floor(Math.random() * last));
};

// Here, Array.from() is used to create an array of the desired length (_range), and the Math.floor(Math.random() * last) is used to generate a random number between 0 and _last, as the array element of each index.

// This will generate an array of _range numbers and it will be random on every run.
