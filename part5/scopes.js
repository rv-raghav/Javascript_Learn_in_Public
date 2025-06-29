var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 // overwrites var c = 300
    console.log("Inner:", a);

}
console.log(a); /*let and const are block-scoped. Block scope means a variable is accessible only within the nearest enclosing block (e.g., within an if statement or for loop).
*/
// console.log(b);
console.log(c); //var is function-scoped (or globally scoped if declared outside a function)


function one(){
    const username = "raghav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


//hoisting
addone(5) //--> return 6
function addone(num){
    return num + 1
}

addTwoNumbers(5) //--> gives error
const addTwo = function(num){
    return num + 2
}