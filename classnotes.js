'use strict'

// Comparison returns a boolean(true, false)

// == Loose Equality (check value, not the type)
    console.log(5 == "5") // true

// === Strict Equality (checks the value, and the type)
    console.log(5 === "5"); // false
    console.log(6 === 6); // true

// // != Loose Inequality (checks value, not type)
    console.log(5 != 5); // false
    console.log(5 != 9); // true
    console.log("Hello There!" != "Hello There"); // You can use it on a string

// !== Strict Inequality (check value, and the type)
    console.log("Hello There!" != "Hello There"); // true
    console.log("6" !== 6); // true
    console.log("6" !== "6"); // false

// > Greater than, < Less Than
    console.log(4 > 5) // false
    console.log(10 < 67) // true

// >= Greater than or equal, <= less than or equal to
    console.log(4 >= 4); // true
    console.log(10 <= 9) // False

//Truthy and Falsy Values

// Truthy Values - Values the exist, and evaluate to true
    "hello"
    1
    {name: "Ellen"}

// Falsy - Values that represent things that dont exist, evaluate to false
    0
    false
    ""
    null
    undefined
    NaN // 'Not a Number'

// Basic strcuture of an if Statements

// if(condition1) {
//     // do whats in here
// } else if(condition2) {
//     // do what in here also
// }
// else {
//     // do this other thing
// }

// Example of if statement
    let time = 6;
    let offTime = 5;

    if(time > offTime) {
        console.log("Go Home!");
    } else {
        console.log("continue working");
    };

// Example of an if statement and else if

    // Check if youre old enough to vote

    let age = 30;

    if(age < 18) {
        console.log("You are a minor.");
    } else if(age === 18) {
        console.log("You JUST became an adult!");
    } else {
        console.log("You are an adult.")
    }


    // Changing HTML with if statements

let userInput = prompt("Give me a number!"); // get a number from a user
let checkButton = document.getElementById("CheckNumber"); // select the button you want to change

// If the user inputs a number greater than 0, turn the button green
// If the user inputs a number less than or equal to 0 turn the button red
// else turn the button black

if (userInput > 0) {
    checkButton.style.backgroundColor = "green";
    console.log(typeof userInput);
} else if(userInput <= 0) {
    checkButton.style.backgroundColor = "red";
} else {
    checkButton.style.backgroundColor = "black";
    console.log(typeof userInput); // "6"
}