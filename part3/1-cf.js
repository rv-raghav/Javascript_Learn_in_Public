// if , else if , if else

const isUserloggedIn = true
const temperature = 41

if(temperature === 41){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

const score = 200

if(score > 100){
    const power = "fly"
    //var power = "fly"
    console.log(`User Power: ${power}`);
}
console.log(`User Power: ${power}`);
// with var this will also give output console.log(`User Power: ${power}`); as it var is global scoped so using in some conditions is not right

//shorthand notation --> dont use mostly
const balance = 1000

// if(balance > 500) console.log("test")

if(balance > 500){
    console.log("less than");
} else if (balance <750){
    console.log("less than 750");
} else if (balance <900){
    console.log("less than 750");   
} else{
    console.log("less than 1200");  
}


const userLoggedIN = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIN && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}