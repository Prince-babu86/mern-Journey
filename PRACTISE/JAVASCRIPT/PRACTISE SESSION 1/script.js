// practse js 

console.log("Hello world");

let str = "javaScript";

// frist methos
// let ans = str.includes("java");

// let user = "mishra_girl_42"

// let ans2 = user.includes("mishra")

// if(ans2){
//     console.log(`${user} is hacked`)
// }else{
//     console.log(`not found`)
// }


// for (let i = 0; i < 100; i++) {
//     document.write("soory<br>");
//   }
  


let user = "JavaScript";


let ans = user.indexOf("Script")

if(ans === -1){
    console.log(false)
}else{
    console.log(true)
}


let arr = [40 , 50 , 60 , 70 , 80 , 90 , 100];

let rrr =  arr.reduce(function(acc , val){
    return acc - (-val);
},0)


for(let i = 1 ; i<=3 ; i++){
    // console.log("*")
    for(let j = 1 ; j<=4; j++){
        console.log("*")
    }
}