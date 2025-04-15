// console.log("welcome to live cohort ")
// console.warn("ths is a warning")

//   var => chnage kar sakte hai kahi bhi
// => let => change kar skate hai lekin block scope me in a function and method
// => const => chnage nahi kar sakte hai

// working for var variable only
if (10 > 5) {
  var a = 10;
  a = 12;
  console.log(a); // we can write in innner metod and outeside the method
}
console.log(a); // this is work also the outside the if method

// working for the let variable only
if (12 > 2) {
  let b = 12;
  console.log(b); // this is work only in the if function because this is block scope variable
}
console.log(b); // b is not defined because of the let variabvle method this work only in the block scope

// working for the const variable only 
if(15 > 3){
    const c = 14 
    console.log(c)
}
console.log(c) // same as let variable =>  c is not defined because of the let variabvle method this work only in the block scope