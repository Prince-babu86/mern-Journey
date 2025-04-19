// Practise session 3


// Questions 
// Remove duplicate values from an array. let arr = [1, 2, 3, 2, 4, 3, 5];
//  Find the second largest number in an array. 
//  Sort an array in descending order. let numbers = [5, 2, 9, 1, 5, 6];
// Reverse an array without using .reverse().
 // Find the most frequent element in an array.


 let arr = [1,2,3,2,4,3,5,3];


 let newarr = [...new Set(arr)].sort(function(a,b){
    return b - a ;
})



// Second arget no of an array 
// console.log(newarr[1])


//sorting an array in decending order 

const mixedNumbers = [12, -7, 3.14, 0, 42, -15.6, 8, 99.99, -0.5, 27];
let ans = mixedNumbers.sort(function(a , b){
    return b - a
})


// Reverse an array without using .reverse().

// 1. frist using with reverse 

let numbers = [2,5,6,8,9,5,6,8,9,5,8,9,6];

let newarr2 = [];
for(let i = numbers.length - 1 ; i>=0 ; i--){
  newarr2.push(numbers[i]);
}



// let freqArr = [1,2,3,1,3,2,6,3,3];

// let obj = {} ;

// freqArr.forEach(function(val){
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++
//     console.log(obj)
// })

// Step | val | Condition (obj[val] === undefined) | Action | obj
// 1 | 1 | true | obj[1] = 1 | {1: 1}
// 2 | 2 | true | obj[2] = 1 | {1: 1, 2: 1}
// 3 | 3 | true | obj[3] = 1 | {1: 1, 2: 1, 3: 1}
// 4 | 1 | false | obj[1]++ | {1: 2, 2: 1, 3: 1}
// 5 | 3 | false | obj[3]++ | {1: 2, 2: 1, 3: 2}
// 6 | 2 | false | obj[2]++ | {1: 2, 2: 2, 3: 2}
// 7 | 6 | true | obj[6] = 1 | {1: 2, 2: 2, 3: 2, 6: 1}
// 8 | 3 | false | obj[3]++ | {1: 2, 2: 2, 3: 3, 6: 1}
// 9 | 3 | false | obj[3]++ | {1: 2, 2: 2, 3: 4, 6: 1}
let freqArr = [1,2,3,1,3,2,6,3,3];
let obj = {} ;
freqArr.forEach(function(val){
    if(obj[val] === undefined){
        obj[val] = 1 
    }else{
        obj[val]++
    }
})
