const userEmail = "raghav@.aiaiai"

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, Nan

//truthy values
// "0", 'false', " ", [], {}, function(){}


// nullish coalescing operator(??:) null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
console.log(val1);

// ternary operator
 
conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

