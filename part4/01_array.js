// array

//ways of declaring an array
const myArray = [1, 2, 3, 4, 5, true, 'raghav'];
const heroes = ['batman', 'superman', 'spiderman', 'ironman'];
const myArr = new Array(1, 2, 3, 4, 5, true, 'raghav');
console.log(myArray[1]);

//array methods

myArray.push(6); // adds an element to the end of the array 
myArray.pop(); // removes the last element from the array
myArray.unshift(0); // adds an element to the beginning of the array
myArray.shift(); // removes the first element from the array
myArray.splice(2, 1); // removes 1 element at index 2
myArray.splice(2, 0, 'newElement'); // adds 'newElement' at index 2 without removing any elements
myArray.slice(1, 3); // returns a new array with elements from index 1 to index 3 (not inclusive)

console.log(myArray.includes(9)); // checks if 9 is in the array
console.log(myArray.indexOf(3)); // returns the index of 9 in the array

const newArray = myArray.join(', '); // joins the array elements into a string
console.log(myArray);
