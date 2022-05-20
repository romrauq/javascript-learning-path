// Creating an object class:
class Hunter {
	constructor(name, age, nenType) {
		this.name = name;
		this.age = age;
		this.nenType = nenType;
	}

	// Object functions are automatically "prototyped" when created using an object class.
	characterDetails() {
		return `${this.name} is a hunter whose nen type is that of a ${this.nenType}.`;
	}
	characterAge() {
		let currentYear = new Date().getFullYear;
		let age = currentYear - this.age;
		return age;
	}
	editAge(age) {
		this.age = age;
		this.ageEdited = true;
	}
	// Creating a static method:
	static classDetails() {
		return "This method can be used on the main class without having to instantiate new objects.";
	}
}

console.log(Hunter.classDetails()); // Static functions are chained onto the class name.

// Instantiating a new oject using the "Hunter" class:
let hunter1 = new Hunter("Hisoka Morrow", 26, "Transmuter");
console.log(hunter1);
