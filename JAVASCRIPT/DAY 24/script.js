// practise session 4

// cloures 

function abcd(){
    let a = 12 ;
    return function(){
        console.log(a)
    }
}

// 

// function callerfnc(fn){
//    setTimeout(fn , 3000);
// }

// callerfnc(
//     function(){
//         console.log("hey")
//     }
// )


let arr = [1,2,3,4,5];

function hap(arr , fnc){
    let newarr = [];
    for(let i = 0 ; i<arr.length ;  i++){
       newarr.push( fnc(arr[i]))
    }
    return newarr;
}

let ans = hap(arr , function(value){
    return value + 3 ;
})

// 


function counter(){
    let count = 0 ;
    return function(){
        count++
        console.log(count);
    }
}

let fn = counter();
fn() ;
fn() ;
fn() ;


// cloures question

function limiter(fn , limit){
    let totalcalled = 0 ;
    return function(){
        if(totalcalled < limit){
            totalcalled++
            fn()
        }else{
            console.error("counter reached")
        }
    }
}


let lmtans = limiter(function(){
    console.log("hey limiter");
} , 3);

