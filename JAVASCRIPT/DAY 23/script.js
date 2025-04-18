// Practise session 3 


// remove duplicates from array


// let arr = [1,1,1,1,1,2,2,22,3,3,33,4,4,44,5,5,55,6,6,6];
// let ans = [...new Set(arr)];
                                       

  // let ans = arr.sort(function(a,b){
  //     //     return b- a ;
  //     // })

// second largest number in array 

// let arr = [2,1,3,5,8,8,9,7,8,2,5,4,6,9,8,74,5,6,];



// [...new Set(arr)].sort(function(a , b){
//     return b - a ;
// })


// console.log(
//     [...new Set(arr)].sort(function(a , b){
//         return b - a ;
//     })[1]
// )


//  revese an array withot using reverse 

// let arr = [1,2,3,4,5,6,7,8,9,98,321]

// let arr2 = [];

// for(let i = arr.length-1 ; i>=0 ; i-- ){
//     arr2.push(arr[i]);
// }


let arr = [3,4,1,3,4,6];
let obj = {} 


arr.forEach(function(val){
    obj[val] === undefined ? obj[val] = 1 : obj[val]++
   console.log(obj[val])
})

