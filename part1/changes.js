// Example of let - mutable variable
let gameName = 'spiderman';
gameName = 'batman';
console.log(gameName);  // Output: batman

// Example of const - immutable variable
const username = "raghav.com";

// This will throw an error - cannot reassign const
// username = 'raghavdooottttcom';  // TypeError: Assignment to constant variable

// Correct way to use the constant
console.log(username);  // Output: raghav.com