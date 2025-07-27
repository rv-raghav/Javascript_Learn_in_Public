class User {
    constructor(first,last) {
        this.first = first;
        this.last = last;
    }
    get fullName () {
        return `${this.first} ${this.last}`
    }
    set fullName(newValue){
        const [first,last] = newValue.split(" ");
        this.first = first;
        this.last = last;
    }
}

const guest = new User("raghav", "verma")
console.log(guest.fullName);

guest.first = "RAGHAV"
guest.fullName = "RAGHAV VERMA"
console.log(guest.fullName);
