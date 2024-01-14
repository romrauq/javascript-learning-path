// Defining an object class:
class Hunter {
	constructor(name, age, nenType) {
		this.name = name;
		this.age = age;
		this.nenType = nenType;
	}

	// Methods within a class are automatically "prototyped" into objects created using the object class.
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
		return "This is returned by a static method when called by chaining it on the class variable.";
	}
}

// Static methods used by chaining them on the class name.
console.log(Hunter.classDetails());

// Instantiating a new oject using the "Hunter" class:
let hunter1 = new Hunter("Hisoka Morrow", 26, "Transmuter");
console.log(hunter1);
console.log(hunter1.characterDetails());
