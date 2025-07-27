// Classes // Methods
// we pass all values in constrcutor and methods outside the constructor
class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
    this.active = false;
  }
  login() {
    this.active = true;
    console.log(`Welcome ${this.username} - ${this.active}`);
    return this;
  }
  logout() {
    this.active = false;
    console.log(`Logged out ${this.username} - ${this.active}`);
    return this;
  }
  display() {
    if (this.active) {
      console.log(`Username: ${this.username}, Age: ${this.age}`);
    } else {
      console.log("Please Login First");
    }
  }
}

const userOne = new User("raghav", 22);
console.log(userOne.username);
userOne.login();
userOne.display();
// userOne.login().display(); //chaining things
// const userTwo = new User("alex", 30);
// console.log(userTwo.age);
