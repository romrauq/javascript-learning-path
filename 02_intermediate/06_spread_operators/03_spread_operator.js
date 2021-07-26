// Object literal Spread operator:
banks = ["Ecobank", "Bank of Ghana", "Standard Charted"];
hospitals = ["Korle bu", "Nuguchi", "Nyaho"];
all = [...banks, ...hospitals];

console.log(all);

character_1 = {
	power: 50,
	element: "electric",
	moves: ["Zap Strike", "Thunder Punch", "lightning Bolt"],
};

character_2 = {
	...character_1,
	special: ["Limit Break", "God Mode"],
};

console.log(character_2.power);

const selected = ["Basic Punch", "Mach Punch", ...character_1.moves];
console.log(selected);
