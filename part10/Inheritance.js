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

class Student extends User{
    constructor(username, age, semester, rank) {
        super(username, age)
        this.semester = semester;
        this.rank = rank;
    }
    updateRank(newRank) {
        this.rank = newRank;
        console.log(this.rank);
    }
    display() {
    if (this.active) {
      console.log(`Username: ${this.username}, Age: ${this.age}, Semester: ${this.semester}, Rank: ${this.rank}`);
    } else {
      console.log("Please Login First");
    }
  }
}

const studentOne = new Student("john", 60, 5, 10);
studentOne.updateRank(15)
studentOne.login().display()