// Practise session 2

let arr = [1, 2, 3, 4];

// forEach Method in Array

arr.forEach(function (val) {
  //   console.log(val);
});

// Map method in Array => make a blabk array and return a value

let MApans = arr.map(function (val) {
  return 12;
});

// filter Method in Array => true ya false value of return karta hai

let fillAns = arr.filter(function (val) {
  // return false ; // any value not in new array // output []
  // return true ; // any value not in new array // output [0, 1, 2, 3, 4]

  return val == 2; // output is [2]
});

// Reduce method in Array

let redAns = arr.reduce(function (accumulator, key) {
  return accumulator + key;
}, 0);

let redAns2 = arr.reduce(function (acc, val) {
  return acc * val;
}, 1);

// Questions

let arr2 = [1, 2, 3, 4, 5];

let ans = arr2.reduce(function (acc, val) {
  return acc + val;
}, 0);

let i = 10;
while (i > 0) {
  // console.log(i)
  i--;
}

for (let i = 10; i > 0; i--) {
  // console.log(i)
}

let num = 3;
while (num < 31) {
//   console.log(num);
  num = num + 3;
}

for (let i = 1; i < 31; i++) {
  if (i % 3 == 0) {
    // console.log(i)
  } else {
    // console.log(`not multiple of ${i}`)
  }
}

// let j = 1 ;
// while(j<=100){
//     console.log(j)
//     j++
//     let sum = j+j
//     console.log(sum)
// }

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

let str = "JavaScript";

for (let i of str) {
    // if( i === "A" ||i === "E" || i === "I" || i === "O" || i === "U"){
    //     console.log(i);
    // }
    // console.log(i);
}


let arr3 = [1,1,11,1,1,2,2,22,23,3,3,3,4,44,4,5,5,55,5,6,6,66,7,77,7,88,8,];

let jaja = [...new Set(arr3)];