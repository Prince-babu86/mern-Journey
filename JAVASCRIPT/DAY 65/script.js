//

// function getDetails(username , cb){
//     setTimeout(function(){
//         console.log("Sending request to instragram ......");
//     }, 1000);

//     setTimeout(() => {
//         console.log("fetching data.....");
//     }, 2000);

//     setTimeout(() => {
//         cb()
//     }, 4000);
// }

// getDetails("Prince babu" , function(){
//     console.log("data saved to gallery");
// })

// Callback hell in javascript

// function stepOne(cb){
//     console.log("step1");
//     cb()
// }

// function stepTwo(cb){
//     console.log("step2");
//     cb()
// }

// function StepThree(cb){
//     console.log("step3");
//     cb()
// }

// // Callback hell

// stepOne((()=>{
//     stepTwo((()=>{
//         StepThree((()=>{
//             console.log("All steps are complated");
//         }))
//     }))
// }))

// Promises in javascript

// let pr =  new Promise(function(res , rej){
//     console.log("Instram jayo data layo");
//     console.log("data collect ho raha hai");
//     console.log("error aa gaya nahi aaya hai ");
//     console.log("getting data........");
//     res();
// })

// pr.then(function(){
//     console.log("resolved");
// }).catch(function(){
//     console.log("rejected");
// })

// let ans = new Promise(function(res , rej){
//     setTimeout((name) => {
//     console.log("HELLO WORLD 1")
//     }, 1000);

//     setTimeout((name) => {
//        console.log("HELLO WORLD 2")
//     }, 2000);

//     setTimeout(() => {
//       console.log("HELLO WORLD 3")
//     }, 3000);

//    setTimeout((name) => {
//     res();
//    }, 4000);
// })

// ans.then(()=>{
//     console.log("resolved");
// }).catch(()=>{
//     console.error("rejected");
// })

// function h1(cb) {
//   console.log("hey 1");
//   cb();
// }

// function h2(cb) {
//   console.log("hey 2");
//   cb();
// }

// function h3(cb) {
//   console.log("hey 3");
//   cb();
// }

// h1(function () {
//   h2(function () {
//     h3(function () {
//       console.log("All steps are completed.....");
//     });
//   });
// });

// ;



setTimeout(() => {
    console.log("Task1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);