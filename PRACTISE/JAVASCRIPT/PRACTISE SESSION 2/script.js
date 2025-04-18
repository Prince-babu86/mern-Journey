// Practise session 2

// Arrays and objects
// strings methos
// loops in js
// includes and indexof
// Arrays methods in javascript

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let obj = {
  name: "Prince babu",
  age: 18,
};

Object.freeze(obj);

obj.name = "pavani kumari";

let str = "Radhe-Radhe";

// methods of strngs

// console.log(str.length);

if (str.includes("Radhe-")) {
  //   console.log("Radhe-Radhe");
} else {
  //   console.log("Ram-Ram");
}

if (str.startsWith("Radhe-")) {
  //   console.log("found Radhe-Radhe");
} else {
  //   console.log("not Found");
}

let str2 = "mozilla";

if (str2.startsWith("zilla")) {
  // console.log("found zilla");
} else {
  // console.log("not found zilla")
}

if (str2.endsWith("zilla")) {
  // console.log("found zilla");
} else {
  // console.log("not found zilla")
}

// find the position of string => indexof

let username = "itz_kallukaliya";

// let pop = prompt("Enter usename here!")

// let ans = username.indexOf(pop);

// if(ans === -1){
//     console.log(`user not found`)
// }else{
//     console.log(`${username} user is  found`);
// }

// let ans = username.slice(0 , 4);

// let updated = username.replace("itz_" , "iam");
// username = updated

// loops in javascript

// let i = 0 ;
// while(i<=100){
//     if(i%2 ==0) console.log(`they are even numbers ${i}`);
//     else console.log(`they are odd numbers ${i}`);
//     i += 5;
// }

// let prime = Number(prompt("Enter a number between 1 to 50"));

// for(let i = 1 ; i<=50 ; i++){
//     if(i%prime == 0 && i/prime == 1){
//         console.log(`${i} is a prime number`)
//     }else{
//         console.log("not prime");
//     }
// }

for (let char of username) {
  // console.log(char.toUpperCase())
}

let sum = 0;
for (let num in arr) {
  num++;
  sum += num;
}

// console.log(sum)

let sum2 = 0;

for (let i = 1; i <= 15; i++) {
  sum2 += i;
  // console.log(sum2)
}

for (let val in obj) {
  // console.log(`${val} is ${obj[val]}`)
}

// Arrays and theris methods in javascript

let marks = [50, 60, 80, 90, 75, 85, 60];

// forEach method
// let average = 0 ;
// marks.forEach(function(val , index){
//    average += val ;

// })

// console.log(average)

// map mehod
// let ans = marks.map(function(mark , idx){
//    return {idx ,  mark}
// })

// filter method
// let num = prompt("enter a number here");
// let ans = marks.filter(function(val , idx){
//     if(val > num) return val;
// })

// console.log(ans)

const users = [
  "Aarav Sharma",
  "Meera Gupta",
  "Rajveer Singh",
  "Ishita Mehta",
  "Vivaan Verma",
  "Anaya Reddy",
  "Kunal Thakur",
  "Diya Nair",
  "Arjun Malhotra",
  "Sanya Kapoor",
];


let search = prompt("enter name here ")
let ans = users.filter(function(user , index){
    if(user.toLowerCase().includes(search.toLowerCase())) return user
})


console.log(ans)


let avg  = marks.reduce(function(acc , val){
    return acc + val
},0)