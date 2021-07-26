const person = {
	full_name: "Steve Burnam",
	age: 34,
	gender: "Male",
	married: false,
};

// Destructiuring an object properties into variables:
const { full_name, gender } = person;

console.log(full_name);
console.log(gender);
