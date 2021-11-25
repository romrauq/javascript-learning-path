myObject = { name: "Sebastian Kane" };

try {
	console.log(myObject.name);
} catch (err) {
	if (!myObject.name) {
		console.log("No name property in returned object", e.message);
	} else if (!myObject.age) {
		console.log("No age property in returned object!", e.message);
	} else {
		console.log("Unforseen error:", e.message);
	}
} finally {
	console.log("I'll ran no matter what.");
}
