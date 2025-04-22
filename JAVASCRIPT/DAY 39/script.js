// // 
// setTimeout(() => {
    
//     console.log('hello');
// }, 1000);




// let btn = document.querySelector("button")
// let isfriend = document.querySelector("h2")



// btn.addEventListener("click" , function(){
//     isfriend.innerHTML = "Request Sending..."
//     isfriend.style.color = "gold"
//     setTimeout(function(){
//         isfriend.innerHTML = "Friends"
//         btn.innerHTML = "Remove friend"
//         btn.style.backgroundColor = "blue"

//     } , 3000)
// })



// // setinterval => control loop
// // setTimeout => delay 

// let a = 0 ;
// setInterval(() => {
  
//    console.log(a++)
// }, 1000);

let btn = document.querySelector("button");
let percent = document.getElementById("percent");
let growth = document.getElementById("growth")

let grow = 0
btn.addEventListener("click" , function(){
    let init = setInterval(() => {
        grow++
        percent.innerHTML = grow+"%"
        growth.style.width = grow+"%"
        btn.disabled = true
    }, 50);


    setTimeout(() => {
        clearInterval(init)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.7
       
    }, 5000);
})

