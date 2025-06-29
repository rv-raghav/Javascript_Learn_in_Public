//1.
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("G");
    console.log('H');
    console.log("A");
    console.log("V");
}
// sayMyName()

//2.
function addTwoNumbers(number1, number2){ //number1, number2--> parameters
    let result = number1 + number2
    return result
    console.log("raghav"); // never logged

}
const result = addTwoNumbers(3,4) //3,4--> arguments
// console.log("Result: ",result);

//3.
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
const username = loginUserMessage("raghav");
console.log(username);

//4.Shopping Cart
function calculateCartPrice(...num1){ //... rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500));

//5.
const user = {
    username: "raghav",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400 ,100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000, 10000]));

/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like 'Making Green tea' when called with 'green tea'.Store the result in a variable named 'teaOrder'.
*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
teaOrder = makeTea("green tea");
// console.log(teaOrder); // Output: Making green tea

/*
2. Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like Order confirmed for chai. Call confirmOrder from within orderTea and return the result.
*/
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
teaOrder = orderTea("chai");
// console.log(teaOrder); // Output: Order confirmed for chai
/*

3. Write an arrow funciton named `calculateTotal` that takes two parameters: `price` and `quantity`. The functiion should return the total cost by multiplying the price and quantity.
*/
let constTotal = (price,quantity) => {
  return price * quantity
}
let totalCost = constTotal(5, 3);
// console.log(totalCost)// Output: 15

