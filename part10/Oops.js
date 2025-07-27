// Building Blocks
// 1. class
// 2. Object / Instance
// 3. Attribute / Property
// 4. Method

// OOP Advantages
// 1. Code re-usability
// 2. Improved integration
// 3. Improved Productivity
// 4. Easy to maintain and upgrade
// 5. Hide complexity
// Object of one individual user
// const user1 = {
//     name: "Alex",
//     birthday: "14/07/1997",
//     gender: "Male",
//     age: function() {
//         return Date.now() - this.birthday;
//     },
// }

// Object of second individual user
// const user2 = {
//     name: "Deepika",
//     birthday: "17/05/1995",
//     gender: "Female",
//     age: function() {
//         return Date.now() - this.birthday;
//     },
// }

// Using classes
class User {
  constructor(name, birthday, gender) {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
  }
  calcAge() {
    return Date.now() - this.birthday;
  }
}

const user1 = new User("Alex", "14/07/1997", "Male");
const user2 = new User("Deepika", "17/05/1995", "Female");

// 4 Pillars of OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Abstraction
// 4. Polymorphism
