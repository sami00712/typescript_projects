"use strict";
let numberofFaculty = 4;
let numberofManagement = 3;
let numberofAbsentFaculty = 2;
let totalNumberofFaculty = numberofFaculty * 21;
let quantityOfBiryani = 20;
console.log(quantityOfBiryani / totalNumberofFaculty);
let firstName = "Sami";
let age = 17;
console.log(`hello my name is: ${firstName} and my age is: ${age}`);
let index = 10;
++index;
++index;
--index;
--index;
--index;
console.log(index);
//  this is called unery operators 
let integer = 10;
let mean = ++index + ++index + 6 + --index - 2;
console.log(mean);
let num1 = 20;
num1 /= 2;
console.log(num1);
// this is called assignment operators
// == === != < >
let num3 = 50;
let num2 = 50;
console.log(num3 == num2);
// this is called comperesion operators
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
let weightInKg = 70;
let heightInMeters = 1.75;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`Your BMI is ${bmi} `);
let percentage = 92;
if (percentage >= 90) {
    console.log("Party !!!!");
}
else {
    console.log("No Party !!!!");
}
let myPerentage = 93;
if (myPerentage >= 90 && myPerentage <= 100) {
    console.log("Your grade is :A+");
}
else if (myPerentage >= 70 && myPerentage <= 89) {
    console.log("Your grade is :A");
}
else if (myPerentage >= 60 && myPerentage <= 69) {
    console.log("Your grade is :B");
}
else {
    console.log("Failed !");
}
function greet() {
    return "Hello Sami";
}
let message = greet();
console.log(message);
function sum() {
    return 2 + 2;
}
let result = sum();
console.log(result);
function subtract() {
    return 10 - 5;
}
let find = subtract();
console.log(find);
function divide(num1, num2) {
    let answer = num1 / num2;
    return answer;
}
let regard = divide(20, 40);
console.log(regard);
function great(message = "Hello World") {
    return message;
}
let restart = great();
console.log(restart);
let graet = () => "Hello Universe";
// let rawone = graet();
// console.log(rawone);
console.log(graet);
