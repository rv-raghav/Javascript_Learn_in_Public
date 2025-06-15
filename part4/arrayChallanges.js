/* Challenge 1: Array Element Access using Index
Method Used: Array indexing with [0] - Gets first element of array
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];

/* Challenge 2: Array Element Access using Index
Method Used: Array indexing with [2] - Gets third element (zero-based indexing)
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* Challenge 3: Array Element Modification
Method Used: Array element assignment - Changes value at specific index
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

/* Challenge 4: Array Addition
Method Used: Array.push() - Adds element to end of array
*/
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

/* Challenge 5: Array Removal
Method Used: Array.pop() - Removes and returns last element of array
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

/* Challenge 6: Array Reference Copy
Method Used: Assignment operator (=) - Creates reference to same array in memory
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

/* Challenge 7: Array Deep Copy
Method Used: Spread operator (...) - Creates new array with copied elements
Alternative: Array.slice() - Creates shallow copy of array
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

/* Challenge 8: Array Concatenation
Method Used: Array.concat() - Combines two or more arrays into new array
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

/* Challenge 9: Array Length Property
Method Used: Array.length - Gets number of elements in array
*/
let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;

/* Challenge 10: Array Search
Method Used: Array.includes() - Checks if element exists in array
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
