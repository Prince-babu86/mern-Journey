// DAY 38 DOM manuplations

// Math.random()

// let num = Math.floor(Math.random()*100)
// console.log(num)

// Project 1 => create random color

// let btn = document.querySelector("button")

// let box = document.querySelector(".box")

// btn.addEventListener("click" , function(){
//     let num1 =  Math.floor(Math.random()*256);
//     let num2 =  Math.floor(Math.random()*256);
//     let num3 =  Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${num1} ${num2} ${num3})`
// })

// Project 2
const iplTeamsShort = [
    {
      name: "CSK",
      primaryColor: "#fbee65", // Yellow
      secondaryColor: "#1c2c5b" // Blue
    },
    {
      name: "MI",
      primaryColor: "#045093", // Blue
      secondaryColor: "#d1ab3e" // Gold
    },
    {
      name: "KKR",
      primaryColor: "#3b215d", // Purple
      secondaryColor: "#dcb741" // Gold
    },
    {
      name: "RCB",
      primaryColor: "#da1818", // Red
      secondaryColor: "#000000" // Black
    },
    {
      name: "RR",
      primaryColor: "#ea1a85", // Pink
      secondaryColor: "#1c1cf0" // Blue
    },
    {
      name: "SRH",
      primaryColor: "#f5631b", // Orange
      secondaryColor: "#000000" // Black
    },
    {
      name: "DC",
      primaryColor: "#17449b", // Blue
      secondaryColor: "#d71920" // Red
    },
    {
      name: "PBKS",
      primaryColor: "#d71920", // Red
      secondaryColor: "#c1c1c1" // Silver
    },
    {
      name: "LSG",
      primaryColor: "#00a9e0", // Light Blue
      secondaryColor: "#f2a900" // Orange/Yellow
    },
    {
      name: "GT",
      primaryColor: "#1b2133", // Dark Blue
      secondaryColor: "#eecb30" // Gold
    }
  ];
  


let btn = document.querySelector("button");

let h2 = document.querySelector("h2")

btn.addEventListener('click' , function(){
    let num = Math.floor(Math.random()*iplTeamsShort.length)
    let winner = iplTeamsShort[num]
    console.log(iplTeamsShort[num].primaryColor)
    h2.innerText = winner.name
    h2.style.backgroundColor = winner.primaryColor
    h2.style.color = winner.secondaryColor
})


