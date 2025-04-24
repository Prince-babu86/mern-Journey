// 
let container = document.querySelector(".container")
const items = [
  {
    image: "https://i.pinimg.com/474x/af/ba/e9/afbae989caffca79ebbd0195fde3e473.jpg",
    bgColor: "#FF5733",
    title: "Sunset Glow",
  },
  {
    image: "https://i.pinimg.com/474x/84/bc/4f/84bc4fc6614fb711881755ea866bf30c.jpg",
    bgColor: "#33C1FF",
    title: "Sky Blue Calm",
  },
  {
    image: "https://i.pinimg.com/474x/76/57/dd/7657ddc55251df706a8c3fa6261fcd2a.jpg",
    bgColor: "#75FF33",
    title: "Fresh Green",
  },
  {
    image: "https://i.pinimg.com/474x/42/e6/e1/42e6e1c57aeeb1116d5bd7f7f99a9e84.jpg",
    bgColor: "#FFC300",
    title: "Golden Vibes",
  },
  {
    image: "https://i.pinimg.com/474x/f1/49/7e/f1497e81f1076d7e78bc58a7c34ee509.jpg",
    bgColor: "#A569BD",
    title: "Royal Purple",
  },
  {
    image: "https://i.pinimg.com/474x/42/e6/e1/42e6e1c57aeeb1116d5bd7f7f99a9e84.jpg",
    bgColor: "#F1948A",
    title: "Soft Blush",
  },
  {
    image: "https://i.pinimg.com/474x/c8/35/03/c835031e3e0380adb171312b5bfcb8d2.jpg",
    bgColor: "#45B39D",
    title: "Teal Dream",
  },
  {
    image: "https://i.pinimg.com/474x/0f/3e/0a/0f3e0a4902e5efaa9fc65a3bd2b8074d.jpg",
    bgColor: "#F39C12",
    title: "Amber Flame",
  },
  {
    image: "https://i.pinimg.com/474x/af/ba/e9/afbae989caffca79ebbd0195fde3e473.jpg",
    bgColor: "#FF5733",
    title: "Sunset Glow (Copy)",
  },
  {
    image: "https://i.pinimg.com/474x/84/bc/4f/84bc4fc6614fb711881755ea866bf30c.jpg",
    bgColor: "#33C1FF",
    title: "Sky Blue Calm (Copy)",
  },
  {
    image: "https://i.pinimg.com/474x/76/57/dd/7657ddc55251df706a8c3fa6261fcd2a.jpg",
    bgColor: "#75FF33",
    title: "Fresh Green (Copy)",
  },
  {
    image: "https://i.pinimg.com/474x/42/e6/e1/42e6e1c57aeeb1116d5bd7f7f99a9e84.jpg",
    bgColor: "#FFC300",
    title: "Golden Vibes (Copy)",
  },
  {
    image: "https://i.pinimg.com/474x/f1/49/7e/f1497e81f1076d7e78bc58a7c34ee509.jpg",
    bgColor: "#A569BD",
    title: "Royal Purple (Copy)",
  }
];


let clutter = "";
let loader = true;

setTimeout(() => {
  loader = false;
}, 2000);

function init(itemstorender){
  itemstorender.forEach((elem, idx) => {
    
    clutter += ` <div   class="card">
           <img src=${elem.image}>
          </div>`;
  
  
  });
  
  container.innerHTML = clutter;
}

init(items);



let form = document.querySelector("form") ;
let search = document.querySelector("input") ;


form.addEventListener("submit" , function(e){
  e.preventDefault();
 
  var val = search.value.toLowerCase().trim()
  console.log(val);
  clutter = ""

  if (val === "") {
    // If input is empty, show all items
    init(items);
    return;
  }

  var filtereditems = items.filter(function(elem){
    return elem.title.toLowerCase().includes(val)
  })

//  filtereditems.forEach((elem , idx)=>{
//   console.log(elem.image)
//   clutter += ` <div   class="card">
//          <img src=${elem.image}>
//         </div>`;
//  })


if(filtereditems.length === 0 ){
  document.querySelector(".container").innerHTML = "<h2>No items found</h2>";
}else{
  init(filtereditems)
}  

search.value = "";


// clutter = container.innerHTML

})



