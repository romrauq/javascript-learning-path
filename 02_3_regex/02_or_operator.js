// TOPIC: Match a Literal String with Different Possibilities

let myString = "Hisoka is very strong but sadistic.";
let myRegex = /strong|sadistic/;
let result = myRegex.test(myString);
console.log(result);
