const userOne = {
  userName: "raghav",
  fullName: "Raghav Verma",
  email: "raghav@gmail.com",
  age: 22,
  login() {
    console.log("LOGIN");
  },
  logout() {
    console.log("LOGOUT");
  },
};

console.log(userOne.age);
console.log(userOne.email);
userOne.login();

const userTwo = {
  userName: "alex",
  fullName: "Raghav Pace",
  email: "alex@gmail.com",
  age: 30,
  login() {
    console.log("LOGIN");
  },
  logout() {
    console.log("LOGOUT");
  },
};

console.log(userTwo.age);
console.log(userTwo.email);
userTwo.login();
