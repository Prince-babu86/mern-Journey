//  javascript revision part 2 


console.log("Heloo world!");

// lexical scope 

// function outer(name){

//     function inner(){
//         console.log(name);
//     }

//     inner();
// }


// outer("Prince babu");


// Questions practise and revision part 2 


let arr = [1,2,3,4,5,2,3,5,4,32,1,5]


// let ans =  [...new Set(arr)];


// let secLar = ans.sort((a,b)=>{
//     return b - a
// })[0]

function RevArray(arr , fn ){
      let newarr = []
    for(let i = arr.length - 1 ; i>=0 ; i--){
    newarr.push(fn(arr[i]));
}
  return newarr
}


// let ans = console.log(RevArray(arr , function(elem){
//  return elem
// } ))


function delayFun(cb , delay){
    setInterval(cb , delay)
}


 let ans  = delayFun(
    function(){
        console.log("Delay function");
    } , 2000
)


function Counter(){
    let count = 0
    return function(){
        count++
        console.log(count);
    }
}



let a =  Counter()
