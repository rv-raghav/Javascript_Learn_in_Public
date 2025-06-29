//immediately invoked function expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})(); //; needed to end it so next code runs in iife funcitons

((name) =>{
    console.log(`DB connected ${name}`);  
})('raghav')