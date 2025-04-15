// // data types in js 

//   - premetive
//         - Number (10 ,10.5 , 10.5555) 
//         - String ('a' , "pince babu")
//         - Boolean (true , false)
//         - undefined 
//         - null 
//         - Symbol 
//         -BigInt


//    - refrences
//         - Array
//         - Object
//         - function


// 1. => Number 

// numbers are colorfull in console.log
//  x = 5 , y = 10 , x + y = 5 + 10 = 15 ;


// var num1 = Number(prompt("Enter number 1"));
// var num2 = Number(prompt("Enter number 2"));
// console.log(num1+num2)

// 2. => undefined 

// var a ; 
// console.log(a)



// 3. => Null 

// var a = null ; 
// console.log(a)


// // 4. => Bigint 
// var a =  1000000000000000000000000000000000000000n ; 
// console.log(a)

// Hoisting in javascript  => thats wrok lickely this 


// var a 
// console.log(a)
//  a = 10
// console.log(a)



// conditions in js 

// let age =   Number(prompt("Enter Your age"));

// if(age>=18){
//     console.log("You can drive")
// }else{
//     console.log("you cnan not drive")
// }


// let marks = Number(prompt("Enter Your Marks"))
// if(marks>90){
//     console.log("You got A+ grade");
// }else if(marks>80){
//     console.log("You got B+ grade")
// }else{
//     console.log("you are failed"); 
// }



// Binary operators and locical operators 

// true => 1
// false => 0

// var age = Number(prompt("Enter Your age"))

// if(age>18 && age<60){
//     console.log("You can work")
// }else{
//     console.log("You can not work");
    
// }


// var a = 10;
// console.log(a++)
// console.log(a)


// var a = 10
// var b = '10'

// == =>  compare the values
// ===  =>   compare the valus and datatypes



// if(a===b){
//     console.log("True")
// }else{
//     console.log("false")
// }



// var unit =  Number(prompt("Enter Units"))

// var bill 

// if(unit>=100){
//     bill = unit * 10
// }else if(unit >50){
//     bill = unit * 8
// }else{
//     bill = unit * 5
// }

// console.log(bill)


// terniary operators 


// var a  = 10
// var b = 20
// a<b ? console.log("Hello") : console.log("not hello")



var a = 1

while(a<=10){
    console.log(a)
    a++
}