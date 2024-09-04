// ====================Conditional Statement=============================

//IF Statement
let age = 20;

if (age >= 18 ) {
    console.log("You can Vote")
} 

if (age < 18 ) {
    console.log("You can't Vote")
} 

// ======Dark Mode Example=======

let moDe = "dark";
let coloR;

if (moDe === "dark") {
    coloR = "black";
}

if (moDe === "light") {
    coloR = "white";
}

console.log(coloR)


//====== else Statement=====

let ages = 23


if ( ages >= 18) {
    console.log("You can Vote")
} else {
    console.log("You can not Vote")
}


// ODD or Even Number

let num = 23 ;

if ( num % 2 === 0) {
    console.log( num, "is Even")
} else {
    console.log( num, "Is Odd ")
}


//====== else if Statement=====

let mode = "pink";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

// When stratement value is true then below condition is working
if (mode === "pink") {
    console.log(mode);
}



//=========== Turnary Operator ==============

let old = 12;

let result = old >= 18 ? "adult" : "Not adult";
console.log(result)


//=============Prompt=================

let name = prompt("Enter Your Name")
console.log(name)

// Practice Q1
// ------------------
let number = prompt("Enter A number");

if (number % 5 === 0){
    console.log(number , "is a multiple of 5")
} else (
    console.log(number , "Is not a multiple of 5")
)

// Practice Q2

let score = prompt("Enter Your Number [ 0-100 ]") ;
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";          
} else if (score >= 60 && score <= 79) {
    grade = "C";            
} else if (score >= 50 && score <= 59) {
    grade = "D";            
} else if (score >= 0 && score <= 49) {
    grade = "F";
}
console.log(" Your Grade is:",grade)

