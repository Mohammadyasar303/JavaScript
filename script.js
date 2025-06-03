// Arithmetic operators

let a = 10;
let b = 1;

console.log(a + b); // Addition

// Unary Operators
console.log(++a); // Increment
console.log(--b); // Decrement
console.log(a++); // Post-increment
console.log(b--); // Post-decrement
console.log(++a); // pre increment
console.log(--b); // pre decrement

//  Conditional Statements
 
// example of if statement
let age=18;

// ex.1 (if statement)
if(age >= 18) {
    console.log("You are an adult");
}

// ex.2
if(age < 18) {
    console.log("You are a minor");
}

// ex.3

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

// ex.4 (if-else statement)

let num = 10;

if(num % 2 == 0){
    console.log(num , "is a Even number");
}else{
    console.log(num , "is a Odd number");
}

// ex.5 (else-if statement)

let displayMode = "dark";
let currentMode; 

if (displayMode === "dark") {
    currentMode = "dark mode";
} else if (displayMode === "grey") {
    currentMode = "grey mode";
} else {
    currentMode = "light mode";
}

console.log("Current Display Mode is :", currentMode);