// json data to frontend 
// Event bubbling

 const users = [
    {
      username: "rohit123",
      age: 25,
      isMarried: false,
      isStatus:"Stranger",
      image:"https://i.pinimg.com/474x/1b/95/04/1b95041e668a69daf5ffa23023c89461.jpg",
    },
    {
      username: "neha_k",
      age: 28,
      isMarried: true,
      isStatus:"Stranger",
      image:"https://i.pinimg.com/474x/fc/90/44/fc9044956f470e17b2291eb5f0c221dc.jpg",
    },
    {
      username: "arjun_dev",
      age: 32,
      isMarried: true,
      isStatus:"Stranger",
      image:"https://i.pinimg.com/474x/5d/65/48/5d65483792cde24ed0df20bee898ae27.jpg",
    },
    {
      username: "megha_01",
      age: 21,
      isMarried: false,
      isStatus:"Stranger",
      image:"https://i.pinimg.com/474x/18/51/2d/18512d1e9f31dff9f5cf6b984d19d392.jpg",
    }
  ];

  let container =   document.querySelector(".container")
function init(){
    let clutter = "" ; 
  users.forEach((elem , idx) =>{
 
    let color = elem.isStatus === "Stranger" ? "blue" : "gray"
  

    clutter += `<div class="card">
    <img src=${elem.image} alt="">
    <h1>${elem.username}</h1>
    <h5>${elem.age}</h5>
    <h4>isMaried : ${elem.isMarried}</h4>
    <h5>  ${elem.isStatus}</h5>
    <button style="background-color: ${color}" id=${idx} >${elem.isStatus === "Stranger" ? "Add friend" :"Remove Friend"}</button>
</div>
`
  })

container.innerHTML = clutter
}


init()

export default container.addEventListener("click" , function(dets){
  let gold =  users[dets.target.id];
 
   if(gold.isStatus == "Stranger"){
    gold.isStatus = "Friends"
    init()
   }else{
    gold.isStatus  = "Stranger"
   }
  init()
})


