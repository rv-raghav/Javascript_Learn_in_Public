//Building Blocks of OOPS
/*-class
-object/instance
-Atttribute/Property
-Method*/
/*4 Pillars of OOPS
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism*/ 

/* OOPS Advantage
-Code reusability
-improved intergration
-improved productivity
-easy to maintain and upgrade
-hide complexity
*/

//Object of one individual user
// const user1 = {                           
//     name : "Alex",
//     birthday : "14/07/1997",
//     gender : "male",
//     age:function(){
//         return Date.now() - this.birthday;
//     },
// }                                                            // These are repetitive and not reusable so we create a class

// //Object of second individual user
// const user2 = {
//     name: "Deepika",
//     birthday: "17/05/1995",
//     gender: "female",
//     age: function(){
//         return Date.now() - this.birthday;
//     },
// }

class User{
    constructor(name, birthday, gender){
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
    }
    calcAge(){
        return Date.now() - this.birthday;
    }
}
const user1 = new User("Alex", "14/07/1997", "male");
const user2 = new User("Deepika", "17/05/1995","female");
console.log(user1);
console.log(user2);
