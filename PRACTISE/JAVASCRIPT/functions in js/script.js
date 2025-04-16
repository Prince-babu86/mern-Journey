// Funtions in javascript => function is a block of code that can we re-use it for any action 


function greet(elem){
    console.log(elem);
}

// greet("js is love"); 
// greet("react js is heart");
// greet("node js is brain");

// Types of functions 

// 1. statement function 

function Statfun(){
    console.log("statement function");
};

// Expfun()

// 2. Expression function 

var ExpFun = function(){
    console.log("Expression function")
}


// ExpFun()''


// 3. anoymous function 

setTimeout(function(){
    // anomous function
    console.log("Anomous function")
},1000);


// 4. fat arrow function 

let fatArrofun = () => {
    console.log("fat arrow function");
}


// fatArrofun();


// 5. fat arrow function with one paramaeter

// let user = prompt("Enter something here!")

let ArrfubPar = (a) => {
    console.log(a)
}


// ArrfubPar(user);


// 6. fat arrow function with implict return 

var ImpRetfun = () => {
    return "prince babu"
}


// fat arrow function with implict return 2 


var ImpRetfun2 = () => "Prince babu2";


ImpRetfun2();



// 8. reset parameters 

function reserParam(name1 , name2 , name3 , ...expname){
    // console.log(name1,name2,name3,expname)
    return expname;

}


reserParam("princebabu" , "Lucky" , "Disha" , "pavani" , "Sanjana");



//  advnace functions in javascript 


// hoisting in javascript 
var a ;
console.log(a)
 a = 12 ;  // undefinded beacuae of the var a ; aoto declater at before excute funtion 


 // iife => immedently invoked function 

(function iifefun(){
    console.log("immedently invoked function")
 })();



 var ans  = (function iife2(){
    let a = 12 ;
    return {
        set : function(val){
            a = val
        },
        get : function(){
            console.log(a);

        }
    }
})()



// hofs => higher order function 


function hofsfun(){
    return function(){
        console.log("this is a higher order function")
        return function(){
            console.log("this is a higher order function2")
        }
    }
}

// hofsfun()()();


function hofsfun2(fns){
    fns()
}

hofsfun2(function(){
    console.log("hello world")
});


// hofsfun2();


// callback function 

function callBack(val){

}


callBack(function(){
    console.log("helloworld");
})


// frist order function => fof hamesh ek function fof hi hota hai 