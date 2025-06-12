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

