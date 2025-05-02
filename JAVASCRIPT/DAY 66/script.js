//

// revision

// function step1(cb){
//     console.log("Step1");
//     cb()
// }

// function step2(cb){
//     console.log("Step2");
//     cb()
// }

// function step3(cb){
//     console.log("Step3");
//     cb()
// }

// step1(function(){step2(function(){step3(function(){console.log("completed");})})})

// function stepOne(){
//    return new Promise(function(res , rej){
//         console.log("Step 1");
//         res()
//     })

// }

// function stepTwo(){
//     return new Promise(function(res , rej){
//          console.log("Step 2");
//          res()
//      })

//  }

//  function StepThree(){
//     return new Promise(function(res , rej){
//          console.log("Step 3");
//          res()
//      })

//  }

// stepOne()
// .then(stepTwo)
// .then(StepThree)
// .then((()=>{console.log("All steps are completed");}))

// Simulate a food devilery

// function orderFood(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//           let chance = Math.random() < 0.7
//           if(chance) res()
//             else rej()
//         }, 2000);
//     })
// }

// // flat primise chaning orderFood().then().then()

// orderFood().then((()=>{
//     console.log("Pizza delivered");
// })).catch((()=>{
//     console.log(" ⚠️ delivery feild");
// }))





// chained Promises || User -> Posts -> Comments

function getUser() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "Prince babu" });
    }, 1000);
  });
}

function getPosts(userid) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["tittle 1", "tittle 2"]);
    }, 1000);
  });
}

function getComments(posdid) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["great post", "amazing content", "you rocked up"]);
    }, 1000);
  });
}

getUser()
  .then((data) => {
    console.log(data);
    return getPosts(data.id);
  })
  .then((tittles) => {
    console.log(tittles);
    return getComments();
  })
  .then((comm) => {
    console.log(comm);
  })
  .finally(() => {
    console.log("all data fetched");
  });


// fakeApi delay 


const fakeApi = (endpoint) => {
    const data = {
        users :["Prince" , "lucky" , "pavani"],
        posts :["hey champs" , "great going everyone" , "lets build new"]
    
    }
   
   let delay =  Math.floor(Math.random() * 3000 + 1000);

   return new Promise((res , rej)=>{
    setTimeout(() => {
       res(data[endpoint])
    }, delay);
   })
}


fakeApi("users")
.then((data)=>{
    console.log(data);
})


fakeApi("posts")
.then((data)=>{
    console.log(data);
})