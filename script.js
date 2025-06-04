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

// Ternary Operator

    let isLoggedIn = true;
    
    console.log (isLoggedIn = false ? "Welcome!" : "Try again!");

// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

    // let inputNum = prompt("Enter a number :");

    // if (inputNum % 5 === 0){
    //     console.log(inputNum , "is a multiple of 5");
    // } else {
    //     console.log(inputNum , "is not a multiple of 5");
    // }

// Qs2. Write a code which can give grades to students according to their scores:

    let score = prompt("Enter your Score:");
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >=70 && score < 90){
        grade = "B";
    } else if (score >= 60 && score < 70){
        grade = "C";
    } else if (score >= 50 && score < 60){
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Your grade is :" , grade);