// Questions Practise

// for(let i = 100 ; i>0 ; i--){
//     console.log(i);
// }

// for(let i = 1 ; i<=30 ; i++){
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

// let i = 0
// while(i<31){
//     i++
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

// let sum = 0
// for(let i=0 ; i<=100 ; i++){
//     sum+=i

// }

// console.log(sum);

// let sum = 0
// let total = 0
// while(sum<100){
//     sum++
//     total += sum

// }

// console.log(total);

// for(let i=1; i<=4; i++){
//     let stars = "" ;
//     for(let x = 1 ; x<=3 ; x++){
//        stars += "*" //
//     }
//     console.log(stars);
// }

// let str = "javascript";

// for(let i of str){
//     console.log(i);
// }

// let arr = [1,2,1,2,3,5,4,3,4];

// let ans = [...new Set(arr)].sort(function(a , b){return a-b});

// // Second largest number in the array

// let sec = ans.sort(function(a,b){
//     return b-a
// })[1]

// arr.sort(function(a,b){
//     return b-a
// })

// let arr = [1,2,1,2,3,5,4,3,4];
// let newarr = []

// for(let i = arr.length - 1 ; i>=0; i--){

//   newarr.push(arr[i])
//    console.log(arr[i]);
// }

// console.log(newarr);

// creating own map method

// let arr = [1,2,3,4,5,6,7,8,9,10]


// function hap(arr , fn){
//     let newarr = []
//     for(let i = 0 ; i<=arr.length - 1 ; i++){
//         newarr.push(fn(arr[i]))
//     }
//     return newarr
// }


// let ans = hap(arr , function(elem){
//    return elem
// })


// JavaScript Advanced HOFs, 
// Callbacks, and Closures 


// higher order function 

// function Higher(callback){
//    setTimeout(callback , 3000)
// }


// Higher(function(){
//     console.log("Executed after 3 seconds..........");
// })


function Java(elem){
   return function Jaja(){
        console.log(elem);
    }
}


Java("Prince babu")();
function hofExample(callback) {
    return function () {
      callback();
    };
  }


  hofExample(function(){
    console.log("i am a callback function");
  })()
  