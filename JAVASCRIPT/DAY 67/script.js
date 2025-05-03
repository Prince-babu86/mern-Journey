//

function getUserInfo(username){
   return fetch(`https://api.github.com/users/${username}`)
   .then((res)=>{
   return res.json()
   });
  
 

   
}


getUserInfo("hitesh")
.then((data)=>{
    console.log(data);
})


// document.querySelector("button").addEventListener("click" , function(){
//     fetch("https://api.github.com/users/Prince-babu86")
//     .then((res)=>{
//         return res.json()   // raw data thats not readable
//     })
//     .then((data)=>{
//     console.log(data);
//     })
// })


function reapter(cb , delay){
    return function(){
        setTimeout(cb , delay);
    }
  
}


let ans =  reapter(function(){
    console.log("hey..");
} , 3000);