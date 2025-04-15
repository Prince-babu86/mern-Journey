// Age Category Message – Ask the user for their age. If they are 
// under 18, print “You are a minor.” If they are between 18 and 60, 
// print “You are an adult.” If they are above 60, print “You are a 
// senior citizen.


let user = Number(prompt("Enter your age here"))

if(user < 18 ){
    console.log("You are a kid");
    
}else if(user >= 18 && user < 60 ){
    console.log("You are an adult");
    
}else{
    console.log("You are a citizen");
    
}


// Even or Odd Sum – Take two numbers from the user using 
// prompt(). If the sum of both numbers is even, print “Even Sum”; 
// otherwise, print “Odd Sum.


// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter a number"));


// let sum = (num1 + num2) % 2

// if(sum == 0){
//     console.log("Even sum")
// }else{
//     console.log("Odd summ");  
// }

// Character Case Checker – Ask the user for a single character. 
// Check if it's uppercase, lowercase, or neither (not a letter)

// let char = prompt("Enter a Character")

// if(char === char.toLowerCase() && char !== char.toUpperCase()){
//     console.log("Lowercase")
// }else if(char === char.toUpperCase() && char !== char.toLowerCase()){
//     console.log("Uppercase")
// }else{
//     console.log("Neither case");
    
// }

// Largest of Three Numbers – Take three numbers as input and 
// print the largest number among them without using 
// Math.max()

// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter a number"));
// let num3 = Number(prompt("Enter a number"));

// if(num1 > num2 && num1 > num3){
//     console.log(`this is the largest number is ${num1}`)
// }else if(num2 > num1 && num2 > num3){
//     console.log(`this is the largest number is ${num2}`)
// }else{
//     console.log(`this is the largest number is ${num3}`);
    
// }


// Positive, Negative, or Zero – Take a number input and check if it 
// is positive, negative, or zero


// let num = Number(prompt("Enter a number"));

// if(num > 0){
//     console.log("Positive number")
// }else if(num < 0){
//     console.log("Negative number")
// }else{
//     console.log("Number is zero");
    
// }


// Traffic Light System – Ask the user for a traffic light color (red, 
//     yellow, green). Print appropriate messages:
//      Red: "Stop!"
//      Yellow: "Get Ready!"
//      Green: "Go!"


let color = prompt("Enter Traffic Light color");


if(color === "red" ){
    console.log("Stop");
    
}else if(color === "green"){
    console.log("Go")
}else if(color === "yellow"){
    console.log("get ready")
}else{
    alert("Enter a traffic valid color ")
}

// Multiplication Table – Ask the user for a number and print its 
// multiplication table up to 10


let mul = Number(prompt("Enter a number to get multiplicaton table"));

for(let i = 1 ; i <=10 ; i++){
   if(mul > 0 && mul <= 10){
    console.log(i*mul)
   }else{
    alert('Enter a number for getting a table from 1 to 10');
   }
}


// 11. Grade Calculator – Ask the user for their marks (0-100). 
// Assign grades based on the range:
//  90-100: A
//  80-89: B
//  70-79: C
//  60-69: D
//  Below 60:F

let marks = Number(prompt("Enter your marks here "))

if(marks >= 90 && marks <=100){
    console.log('Grade A')
}else if(marks >= 80){
    console.log('Brade B')
}else if(marks >= 70){
    console.log('Grade C')
}else if(marks >= 60){
    console.log('grade D')
}else{
    console.log('grade F')
}


// Simple Login System – Set a predefined username and 
// password. Ask the user to enter their credentials using 
// prompt(). If correct, print “Login Successful”; otherwise, print 
// “Incorrect username or password.

let username = "ronak08";
let password = 1234;

let inputusername = prompt("Enter a username here ");
let inputpassword = prompt("Enter a password here");

if(username === inputusername && password == inputpassword){
    console.log(`Login sucessfully ${username} you are logged in `)
}else{
    console.log("Username and password incorrect");
}

// Sum of Digits – Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).



let num = prompt("Enter a number here!")

let newnum = num.split("")
// console.log(newnum)


// for(let i = 1 ; i <= newnum.length ; i++){
//     console.log(i)
// }

let sum = 0 ;
for(let val of newnum){
    // console.log(val)
 let newval =  Number(val)
    sum += newval
  
    
}

if(sum){
    console.log(sum)
}else console.log(" 🙏 please Enter a valid number here 🙏")



// FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself. 
