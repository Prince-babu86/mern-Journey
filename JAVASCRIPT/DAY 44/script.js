// Day 44 => 

    // getAttribute and setAttribute
//  // create an Elemant 
//  // Events 

// Swap images 

//  let btn = document.querySelector("button");
//  let img1 = document.getElementById("image1");
//  let img2 = document.getElementById("image2");



//  btn.addEventListener("click" , function(){
//   let img1src =   img1.getAttribute("src");
//   let img2src =   img2.getAttribute("src");

//   img1.setAttribute("src" , img2src);
//   img2.setAttribute("src" , img1src);

//  })


//  setInterval(() => {
//     let img1src =   img1.getAttribute("src");
//     let img2src =   img2.getAttribute("src");
  
//     img1.setAttribute("src" , img2src);
//     img2.setAttribute("src" , img1src);
//  }, 1000);


// 


// let btn = document.querySelector("button")

// let body = document.querySelector("body")


// btn.addEventListener("click" , function(){
//     let img = document.createElement("img")
//     let x = Math.random()*100
//     let y = Math.random()*100
//     img.setAttribute("src" , "radha.png");
//     img.style.height = "600px"
//     img.style.left = x+"%"
//     img.style.top = y+"%"
//    body.appendChild(img)
//     console.log(img)
// })


// Colorfull loader


const darkColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black",  "gray"];
;
  


setInterval(() => {
    let spincolor = Math.floor(Math.random()*darkColors.length);
    // console.log(colors[spincolor]);
   document.querySelector(".loader").style.borderTopColor = darkColors[spincolor] ; 
}, 1000);




// let box = document.querySelector(".box");

// let grow = 0 ;

// document.addEventListener("scroll" , function(dets){
//    console.log(window.scrollY > window.scrollY);
// })


