let marvel_heros = ['thor', 'iron man', 'hulk', 'black widow', 'captain america'];
let dc_heros = ['superman', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros); // concatenates dc_heros to marvel_heros
console.log(allheros);

//spread operator
const allheros2 = [...marvel_heros, ...dc_heros]; // spreads the elements of both arrays into a new array
console.log(allheros2);