// Number Examples
let balance = 120;
let anotherBalance = new Number(120);  // Object wrapper (not recommended)

// Boolean Examples
let isActive = true;
let isReallyActive = new Boolean(true);  // Object wrapper (not recommended)

// Null and Undefined Examples
let firstName;  // undefined by default
let lastName = null;  // explicit null value

// String Examples
let username = "Raghav";
let myStringOne = 'Hola';

// String Concatenation
let oldGreetMessage = myStringOne + " " + username;

// Template Literals
let greetMessage = `Hello ${username}`;
let mathExample = `Value is ${2 * 2} and ${3 * 3}`;

// Symbol Examples - Always unique
const sm1 = Symbol('raghav');
const sm2 = Symbol('raghav');
console.log(sm1 === sm2);  // false - Symbols are always unique


