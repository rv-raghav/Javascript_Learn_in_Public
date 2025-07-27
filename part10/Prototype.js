function User(username, age) {
    this.username = username;
    this.age = age;
    this.active = false;
}

User.prototype.login = function() {
    console.log("LOGIN");
}

function Student(username, age, semester, rank) {
    User.call(this, username, age);
    this.semester = semester;
    this.rank = rank;
}
Student.prototype.updateRank = function(newRank) {
    this.rank = newRank;
    console.log(this.rank);
    
}
const userOne = new User("raghav", 22)
console.log(userOne.username);
userOne.login()

const studentOne = new Student("john", 20, 5, 10);
console.log(studentOne.username);
studentOne.updateRank(15)
console.log(studentOne.rank);
