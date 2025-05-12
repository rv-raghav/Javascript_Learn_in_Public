// Basic console output
console.log("Hello");             // Simple string output
process.stdout.write("chai");     // Direct stdout write without newline

// Object output examples
const city = {
    name: "Jaipur",
    state: "Rajasthan",
    population: 3000000
};

// Different console methods
console.table(city);              // Displays object as table
console.warn(city);               // Warning output
console.info("Info message");     // Information output
console.error("Error message");   // Error output

// Formatted output
console.log("%c Styled text", "color: blue; font-size: 20px"); // Styled console output

// Performance measurement
console.time("loop");
for(let i = 0; i < 1000; i++) {}
console.timeEnd("loop");          // Measures execution time
