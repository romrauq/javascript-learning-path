// Page 36, 37, 38 of Orielly's "Learning React" 
const character = {
	name: "Hisoka Morrow", rating: 0
}

// Function that mutates an object:
function changeRating(character, rating) {
	character.rating = rating
	return character
};

// console.log(changeRating(character, 5).rating);
// console.log(character.rating)


const character_2 = {
	name: "Killua Zoldyck",
	rating: 0
}

// Function for keeping an object immutable:
function change_rating(character, rating){
	return Object.assign({}, character, {rating: rating})
}

// console.log(changeRating(character_2, 5).rating);
// console.log(character_2.rating)

const list = [{title: "Blood Red"}, {title: "Sky Blue"}, {title: "Pussy Pink"}]
console.log(list.length)

list.push({title: "Night Black"}) // .push() mutates its chained object. 

let new_list = list.concat({title: "Gold Yellow"}) // .concat() does not mutate its chained object. 

console.log(new_list.length)
console.log(list.length)
