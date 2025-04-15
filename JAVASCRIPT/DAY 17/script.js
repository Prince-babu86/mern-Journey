// Functions in javascript

// what is a function => is a block of code

// function greet(elem){
//     console.log(elem)
// }

// greet("hey");
// greet("hello");
// greet("namste");

// function abcd(a , b ,  c, d  , e){
// console.log(a,b,c,d)
// }

// abcd(1 , 2 , 3 , 4)

// abcd(5);

// types of the functions

// // 1.
// function abcd(){
//     // function statement
// }

// // 2.

// var abcd = function(){
//     // function expression
// }

// 3.

// function (){
//     //anonymous functions
// }

// 4.

let abc = () => {
  // fat arrow function
};

// 5. => fat arrow function with one parameter

let abcd = (a) => {
  console.log(a);
};

abcd(12);

// 6. fat arrow function with implicit return

function imp12() {
  return "Prince babu";
}

imp12();

// 7.

var abcd2 = () => 12;

var abcx = abcd2();

//  rest parameters

function restPara(a, b, c, ...rest) {
  console.log(a, b, c, rest);
  console.log(rest);
}

restPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
