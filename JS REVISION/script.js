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


// function Java(elem){
//    return function Jaja(){
//         console.log(elem);
//     }
// }


// Java("Prince babu")();
// function hofExample(callback) {
//     return function () {
//       callback();
//     };
//   }


//   hofExample(function(){
//     console.log("i am a callback function");
//   })()
  

//   function counter(){
//     let count = 0
//     return function(){
//       count++
//       console.log(count);
//     }
//   }


// let ans = counter()  



// Questions practise in javascriot 

// function Counter(){
//     let sum = 0
//     return function(){
//         sum++
//         console.log(sum);
//     }
// }

// let count = Counter();


// count()


// function Remember(name){
//     return function(){
//         return name
//     }
// }


// let ans =  Remember("JAJA");

// function createPrivate(){
//     let value = null
//     return {
//         getvalue:function(){
//             return value
//         },
//         setvalue: function(newval){
//             value = newval
//         }
//     }
// }

// const privateobj = createPrivate()

// privateobj.setvalue(45)

// console.log(privateobj.getvalue());


/// Advance concepts and js revsion 

// types of functions 

// normal functions
function greet(){
    return "Hello"
}


const greeter = (name,age,email) => {
    let obj = {
        name:name,
        age:age,
        email:email
    }
    return obj ;
}

// greeter("Prince babu" , 18 , "princebabu4495@gmail.com")

(function (x){
    console.log(x);
    return function(y){
        console.log(y);
    }
})(1)(2);


// callback function 

function frist(callback){
   callback()
}



frist(function second(){
    console.log("Second fnc by frist fnc.");
})


/// higher order function 


function Higher(x){
    return function(y){
        console.log(`sum of ${x} + ${y} = ${x+y}`);
    }
}




let ans = Higher(5)


function Clor(){
    
}


