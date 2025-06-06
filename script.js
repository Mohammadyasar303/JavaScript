// // Arithmetic operators

//     let a = 10;
//     let b = 1;

//     console.log(a + b); // Addition

// // Unary Operators
//     console.log(++a); // Increment
//     console.log(--b); // Decrement
//     console.log(a++); // Post-increment
//     console.log(b--); // Post-decrement
//     console.log(++a); // pre increment
//     console.log(--b); // pre decrement

// //  Conditional Statements
 
// // example of if statement
//     let age=18; 

// // ex.1 (if statement)
//     if(age >= 18) {
//         console.log("You are an adult");
//     }

// // ex.2
//     if(age < 18) {
//         console.log("You are a minor");
//     }

// // ex.3

//     let mode = "dark";
//     let color;

//     if(mode === "dark"){
//         color = "black";
//     }

//     if(mode === "light"){
//         color = "white";
//     }

// // ex.4 (if-else statement)

//     let num = 10;

//     if(num % 2 == 0){
//         console.log(num , "is a Even number");
//     }else{
//         console.log(num , "is a Odd number");
//     }

// // ex.5 (else-if statement)

//     let displayMode = "dark";
//     let currentMode; 

//     if (displayMode === "dark") {
//         currentMode = "dark mode";
//     } else if (displayMode === "grey") {
//         currentMode = "grey mode";
//     } else {
//         currentMode = "light mode";
//     }

//     console.log("Current Display Mode is :", currentMode);

// // Ternary Operator

//     let isLoggedIn = true;
    
//     console.log (isLoggedIn = false ? "Welcome!" : "Try again!");

// // Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

//     // let inputNum = prompt("Enter a number :");

//     // if (inputNum % 5 === 0){
//     //     console.log(inputNum , "is a multiple of 5");
//     // } else {
//     //     console.log(inputNum , "is not a multiple of 5");
//     // }

// // Qs2. Write a code which can give grades to students according to their scores:

//     let score = prompt("Enter your Score:");
//     let grade;

//     if (score >= 90 && score <= 100) {
//         grade = "A";
//     } else if (score >=70 && score < 90){
//         grade = "B";
//     } else if (score >= 60 && score < 70){
//         grade = "C";
//     } else if (score >= 50 && score < 60){
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     console.log("Your grade is :" , grade);


// Loops :
        
    // for loop
        // print "i" 5 times
        // for(let i=1; i<=5; i++){
        //     console.log('i');
        // }

        // // print sum of numbers
        // let sum = 0;

        // for(let i=1; i<=100; i++){
        //     console.log(i ,"+", sum ,"=", sum += i);
        // }

    // while loop
        // print 1 to 5
        // let i = 1;
        // while(i<=5){
        //     console.log(i);
        //     i++;
        // }

    // do-while loop
        // print 1 to 10
        // let i = 10;
        // do{
        //     console.log("value of i is :",i);
        //     i++;
        // } while(i <= 100);

    // for-of loop : iterate over arrays, strings, etc.
        // let str = "HelloWorld";
        // let count = 0;
        
        // for(let char of str){
        //     console.log(char);
        //     count++;
        // }

        // console.log("There are total",count,"characters available in string :",str);

    // for-in loop : iterate over object properties
        // let student = {
        //     name: "yasar",
        //     enrollment: 123,
        //     div: "A",
        //     age: 20
        // }

        // for(let key in student){
        //     console.log("key is :", key, "&", "Value is:", student[key]);
        // }

// Loops Practice:
// Qs1. Print all even numbers from 0 to 100.

    // Using for loop
    // for(let i = 0; i <= 100; i++){
    //     if(i % 2 === 0){
    //         console.log("Even numbers are :",i)
    //     }
    // }

    // Using while loop
    // let i = 0;
    // while(i <= 100){
    //     if(i % 2 === 0){
    //         console.log("Even numbers are :", i);
    //     }
    //     i++;
    // }

    // Using do-while loop
    // let i = 0;
    // do {
    //     if(i % 2 === 0){
    //         console.log("Even Numbers are :", i);
    //     }
    //     i++;
    // } while (i<=100);

// Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

    // let gameNumber = 50;
    // let userGuess = prompt("Guess the game number (between 1 and 100):");

    // while (userGuess != gameNumber){
    //     userGuess = prompt("Wrong guess! Try again. Guess the game number (between 1 and 100):");
    // }

    // console.log("Congratulations! You've guessed the correct game number:", gameNumber); 

// Strings:

    //let str = "Hello World!";
    //console.log(str.length); // Output: 12
    //console.log(str.toUpperCase()); // Output: "HELLO WORLD!"
    //console.log(str.toLowerCase()); // Output: "hello world!"

    // Template Literals:
        // let name = "Yasar";
        // let age = 20;
        // let occupation = "Software Developer";
        // let introduction = `My name is ${name}, I am ${age} years old and I work as a ${occupation}.`;
        // console.log(introduction); // Output: "My name is Yasar, I am 20 years old and I work as a Software Developer."

    // String Methods:
        // toUpperCase
            // let name = "Yasar"; 
            // console.log(name.toUpperCase()); // Output: "YASAR"
        
        // toLowerCase
            // console.log(name.toLowerCase()); // Output: "yasar"

        // trim(): Removes whitespace from the start and end of a string.
            // let str = "   Hello World!   ";
            // console.log(str.trim()); // Output: "Hello World!"

        // Slice(): Extracts a section of a string and returns it as a new string.
            // let str = "Hello World!";
            // console.log(str.slice(0, 5)); // Output: "Hello"

        // concat(): Joins two or more strings together.
            // let str1 = "Hello";
            // let str2 = "World";
            // console.log(str1.concat(str2)); // Output: "HelloWorld"

        // replace(): Replaces a specified value with another value in a string.
            // let str = "Hello World!";
            // console.log(str.replace("World", "JavaScript")); // Output: "Hello JavaScript!"
        
        // charAt(): Returns the character at a specified index in a string.
            // let str = "Hello";
            // console.log(str.charAt(0)); // Output: "H"

// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

    // let userInput = prompt("Enter Your Full Name :");

    // while (!userInput){
    //     userInput = prompt("Please enter valid Full name:");
    // }
    // let username = `@${userInput.toLowerCase()}${userInput.length}`;

    // console.log("Your generated username is:", username);

// Arrays :- 
    // let fruits = ["Apple", "Banana", "Cherry", "Date", "Grapes"];

    // Accessing elements by iterating through the array using for loop
        // for (let i=0; i<fruits.length; i++){
        //     console.log(fruits[i]);
        // }

    // Accessing elements by iterating through the array using for-of loop
        // for(let fruit of fruits){
        //     console.log(fruit);
        // }

    //Qs.1 For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
        // let marks = [85, 97, 44, 37, 76, 60];
        // let totalMarks = 0;

        // for (let mark of marks){
        //     totalMarks += mark;
        // }
        //     console.log(`Current Total Marks: ${totalMarks}`);
        //     console.log(`Average of Marks is: ${totalMarks / marks.length}`);

    /*Qs.2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50] 
           All items have an offer of 10% OFF on them. Change the array to store final price after the discount. */

        // let prices = [250, 645, 300, 900, 50]; 
        
        //     for(let i=0; i<prices.length; i++){
        //     let offer = prices[i] / 10; // Calculate 10% offer
        //     offeredPrice = prices[i] - offer; // Store the final price after discount
            
        //     console.log(`Original price is : ${prices[i]}`)
        //     console.log(`Price after 10% Discount is : ${offeredPrice}`);
        //     }

// Arrays Methods:

    // // push() : Add an element to the end of the array 
    //     let numbers = [1,2,3,4,5];

    //     numbers.push(6); // Adds 6 to the end of the array
    //     console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

    // // pop() : Remove the last element from the array
    //     numbers.pop(); // Removes the last element (6)
    //     console.log(numbers); // Output: [1, 2, 3, 4, 5]

    // // toString() : Convert the array to a string
    //     let str = numbers.toString(); // Converts the array to a string
    //     console.log(str); // Output: "1,2,3,4,5"

    // // concat() : Concatenate two or more arrays
    //     let moreNumbers = [7, 8, 9];
    //     let combined = numbers.concat(moreNumbers); // Combines the two arrays
    //     console.log(combined); // Output: [1, 2, 3, 4, 5, 7, 8, 9]

    // // unshift() : Add an element to the beginning of the array
    //     combined.unshift(0); // Adds 0 to the beginning of the array
    //     console.log(combined); // Output: [0, 1, 2, 3, 4, 5, 7, 8, 9]

    // // shift() : Remove the first element from the array
    //     combined.shift(); // Removes the first element (0)  
    //     console.log(combined); // Output: [1, 2, 3, 4, 5, 7, 8, 9]

    // // slice() : Extract a section of the array
    //     let sliced = combined.slice(2, 5); // Extracts elements from index 2 to 4
    //     console.log(sliced); // Output: [3, 4, 5]

    // // splice() : Add or remove elements from the array
    //     combined.splice(2, 2, 10, 11); // Removes 2 elements starting from index 2 and adds 10 and 11
    //     console.log(combined); // Output: [1, 2, 10, 11, 5, 7, 8, 9]

// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

    // let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

    // // a. Remove the first company from the array
    //     console.log(`First company removed : ${companies.shift()}`)
    //     console.log("Companies after removing first company :" ,companies);

    // // b. Remove Uber & Add Ola in its place
    //     companies.splice(1, 1, "Ola")// Removes "Uber" and adds "Ola" in its place
    //     console.log("Companies after replacing Uber with Ola :" ,companies);

    // // c. Add Amazon at the end
    //     companies.push("Amazon");// Adds "Amazon" at the end of the array
    //     console.log("Companies after adding Amazon at the end :" ,companies);
    