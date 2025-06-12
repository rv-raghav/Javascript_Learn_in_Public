// Object demonstration
const username = {
    firstName: "Raghav", 
    isLoggedIn: true
};
console.log(username);
console.log(typeof username); // object

console.log(username.firstName); // Raghav
username.firstName = "Atomic";

console.log(username.firstName); // Atomic //we can change the value of the object property

username.lastName = "Verma"; // we can add new property to the object
console.log(username); // { firstName: 'Atomic', isLoggedIn: true, lastName: 'Verma' }

// Object with space in property name - not recommended
const username2 = {
    firstName: "Raghav",  // Changed from 'first Name' to camelCase
    isLoggedIn: true
};
console.log(username2.firstName); // Raghav
console.log(username2);

// Date object demonstration
const today = new Date();
console.log(today); // 2023-10-05T07:23:45.000Z
console.log(typeof today); // object
console.log(today.getFullYear()); // 2023
console.log(today.getMonth() + 1); // Adding 1 to show actual month number
console.log(today.getDate()); // 5

// Array demonstration
const heroes = ['Superman', 'Batman', 'Spiderman']; // Using const as array won't be modified
const mixedArray = ['Raghav', 'Atomic', true];

// Safe string operations with type checking
mixedArray.forEach((item, index) => {
    if (typeof item === 'string') {
        console.log(`Item ${index} length:`, item.length);
        console.log(`Item ${index} uppercase:`, item.toUpperCase());
    }
});

// Type coercion examples
console.log("1" + 1);     // String concatenation: "11"
console.log(1 + +"1");    // Numeric addition: 2 (unary plus converts string to number)
