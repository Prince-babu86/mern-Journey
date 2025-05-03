// Advance javascript practise 

// function getUserData(){
//     return new Promise((res , rej)=>{
//         let delay = Math.floor(Math.random()*6)
//       setTimeout(() => {
//         res(delay)
//       }, delay);
//     })
// }



// getUserData()
// .then((data)=>{
//     console.log("Completed");
//     console.log(data);
// })
// .catch(()=>{
//     console.warn("Incompleted");
// })


// function getUser(){
//     return new Promise((res , rej)=>{
//        setTimeout(() => {
//         res({id:1,name:"prince babu"});
//        }, 1000);
//     })
// }

// function getPosts(userid){
//     return new Promise((res , rej)=>{
//        setTimeout(() => {
//         res(["post 1 " , "post 2"])
//        }, 1000);
//     })
// }

// function getComments(postid){
//     return new Promise((res , rej)=>{
//        setTimeout(() => {
//         res(["good boy" , "Amazing" , "keep grow"])
//        }, 1000);
       
//     })
// }

// getUser()
// .then((data)=>{
//     console.log(data);
//   return getPosts(data.id)
// })
// .then((tittles)=>{
//     console.log(tittles);
//     return getComments()
// }).then((comm)=>{
//     console.log(comm);
// })
// .finally(()=>{
//     console.log("All steps are completed");
// })


// printing hello after 1 second


// function hey1(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//             res()
//         }, 1000);
//     })
// }

// function hey2(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//             res()
//         }, 1000);
//     })
// }

// function hey3(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//             res()
//         }, 1000);
//     })
// }


// hey1()
// .then(()=>{
//     console.log("hey 1");
//     return hey2()
// })
// .then(()=>{
//     console.log("hey 2");
//    return hey3()
// })
// .then(()=>{
//     console.log("hey 3");
// })


// You are building an online order system. There are 3 steps, and each one returns a Promise:

function placeOrder(orderid){
    return new Promise((res  , rej)=>{
       setTimeout(() => {
        rej({orderid:12345})
        
       }, 1000);
    })
}


function processPayment(paymentid){
    return new Promise((res , rej)=>{
        setTimeout(() => {
            res()
           }, 1000);
    })
}


function sendConfmationPayment(){
    return new Promise((res , rej)=>{
        setTimeout(() => {
            res()
           }, 1000);
    })
}


placeOrder("123")
.then(()=>{
    console.log(`you order is placed ✅`);
    return processPayment()
})
.then(()=>{
    console.log(`you payment 💳 is in processing`);
    return sendConfmationPayment()
})
.then(()=>{
    console.log(`you payment is confirmed 📩`);
})
.catch((err)=>{
    console.error("❌ Error:",  "order order is failed due to some rigion " ,  err.orderid);
})
.finally(()=>{
    console.log(`order flow is completed`);
})

