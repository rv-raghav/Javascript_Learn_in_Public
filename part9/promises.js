const promiseOne = new Promise(function(resolve, reject){
    //Do an async task => DB calls, cryptography, netork
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);  
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "raghav", password: "123"})
        } else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolve or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true
       if(!error){
        resolve({username:"javascript", password:"123"})
       } else {
        reject("Error: JS went wrong")
       }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("Error",error);
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));