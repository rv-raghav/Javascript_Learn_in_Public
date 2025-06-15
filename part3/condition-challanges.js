//1. Checking if a number is greater than another number
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
    console.log("num1 is greater than num2");
}

//2. Checking if a string is equal to another string
let username = "Raghav";
let anotherUsername = "Verma";
if (username === anotherUsername) {
    console.log("pick another username");
}

//3. Checking if a variable is a number or not
let score = 44;
if (typeof score === "number") {
    console.log("score is a number");
} else {
    console.log("score is not a number");
}

//4. Checking if a boolean value is true or false
let isTeaReady = false;
if (isTeaReady) {
    console.log("tea is ready");
} else {
    console.log("tea is not ready");
}

//5. Checking if an array is empty or not
let items = [];
if(items.length === 0) {
    console.log("array is empty");
} else {
    console.log("array is not empty");
}