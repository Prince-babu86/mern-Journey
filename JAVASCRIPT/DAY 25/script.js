// Practise session 5 

// Create a function that takes a callback and executes it after every `n` seconds indefinitely.


function repeater(fn , time){
    setInterval(fn , time)
}

repeater(function(){
    // console.log("heyheyhey");
} , 1000)


// Implement a function that returns a function with a preset greeting (Closure).

// function greetkaro(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// greetkaro("hello")("Prince babu");

function greetSetup(greeting) {
    return function(name){
        console.log(`${greeting} ${name} `);
    }
}

 let indian =  greetSetup("Namaste");
//  indian("Prince babu");
//  indian("Pavani babu");



//  function abcd(cb){
//     let executed = false ;
//     return function(){
//        if(!executed){
//         console.log(executed);
//         executed = true
//         cb()
//          console.log(executed);
//        }else{
//         console.error("already exuced once");
//        }
//     }
//  }


//   let newfnc = abcd(function(){
//     console.log("jai shree ram");
//  })

//  newfnc();
//  newfnc();
//  newfnc();

function throt(fn , delay){
    let lastcall = 0 ;
    return function(){
       let current = Date.now()
       if(current - lastcall >= delay){
        lastcall = current
        fn()
       }else{
        console.error("not run");
       }

    }
}

let ans = throt(function(){
    console.log("run after only 2 seconds ");
} , 2000)

