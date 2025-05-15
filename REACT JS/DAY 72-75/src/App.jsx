import React, { useState } from 'react'


const App = () => {
  const products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Phone", price: 20000 },
  { id: 103, name: "Tablet", price: 15000 }
];


const [username, setusername] = useState("Prince")

const updateddata =  products.map((item , idx)=>{
return (<li key={idx}>
    <span>Name:{item.name}</span>
  
    <small>Age:{item.price}</small>
  </li>)
  console.log(item , idx);
})

const handlerChange = () => {
  setusername("Prince babu")
}


console.log(updateddata);

  return (
    <div>
      <h1 style={{fontFamily:'monospace'}}>{username}</h1>
      <button onClick={handlerChange}>Change name</button>
    </div>
  )
}

export default App
export const data = "i am a web developer !"