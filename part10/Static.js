class Calculator{
    static result = 10;

    static add(number) {
        this.result += number;
    }
}

Calculator.add(5);
console.log(Calculator.result);
