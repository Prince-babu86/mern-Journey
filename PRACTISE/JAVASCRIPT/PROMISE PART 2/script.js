// Promises Part 2

function step1(cb) {
  setTimeout(() => {
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    cb();
  }, 1000);
}

// step1(function () {
//   console.log("Hey 1");
//   step2(function () {
//     console.log("Hey 2");
//     step3(function () {
//       console.log("Hey 3");
//     });
//   });
// });



function Hey1() {
    return new Promise((res , rej)=>{
      setTimeout(() => {
          res()
      }, 1000);
    })
}


function Hey2() {
    return new Promise((res , rej)=>{
         setTimeout(() => {
          res("Hey2 data is here")
      }, 1000);
    })
}



function Hey3() {
    return new Promise((res , rej)=>{
         setTimeout(() => {
          res("Hey3 data is here")
      }, 1000);
    })
}



Hey1().then(()=>{
    console.log("Hey 1");
    Hey2().then((data)=>{
    console.log(data);
   return Hey3().then(()=>{
        console.log("hey 3 ");
    })
   })
})
