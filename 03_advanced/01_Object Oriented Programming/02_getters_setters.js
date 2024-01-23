// Getters are used to get data from a class instance/object.
// Setters are used to set values of properties of a class instance/object.
// They are used without parenthesis as though they are properties of an instance/object.

class Building {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
		this.areaRequests = 0;
	}

	// Defining a getter method using the `get` keyword:
	get area() {
		this.areaRequests++;
		return this.width * this.height;
	}

	// Defining a setter method using the `set` keyword:
	set area(val) {
		this.width = Math.sqrt(val);
		this.height = Math.sqrt(val);
	}
}

let myBuilding = new Building("Quarmor Residence", 50, 45);

console.log(myBuilding.area);
myBuilding.area = 600;
console.log(myBuilding.area);
console.log(myBuilding.width);
console.log(myBuilding.areaRequests);
