// Classes are used to create objects or instances of itself.
// They can be used to define properties and methods of created objects.

class Building {
	constructor(name, floors, location) {
		this.name = name;
		this.floors = floors;
		this.location = location;
	}

	// defining class object method:
	getName() {
		return this.name;
	}
	// defining class object method:
	getFloors() {
		return this.floors;
	}
	// defining class object method:
	getLocation() {
		return this.location;
	}
}

// Creating a new object instance using a class constructor:
let myBuilding = new Building("Quarmor Residence", 3, "Trasaco Valley");

console.log(myBuilding);
console.log(myBuilding.getName());
console.log(myBuilding.getFloors());
console.log(myBuilding.getLocation());
