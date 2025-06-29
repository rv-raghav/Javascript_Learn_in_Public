const user = {
    username: "raghav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "raghav"
//     console.log(this);
// }
// chai()

//Arrow Function

const chai = () => {
    let username = "raghav"
    console.log(this);
}
// chai()

const addTwo = (num1, num2) =>{ //curly we have to use return
    return num1 + num2
}
//const addTwo = (num1, num2) => num1 +num2
//const addTwo = (num1, num2) => (num1 +num2) //parantheses dont need return
//const addTwo = (num1, num2) => ({username: "raghav"}) // returning object

console.log(addTwo(3,4));

