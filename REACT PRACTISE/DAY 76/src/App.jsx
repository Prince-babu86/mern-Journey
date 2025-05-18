import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {

  const [users, setusers] = useState([
    {
    id: 1,
    name: "Aarav Sharma",
    image: "images/profile1.jpg"
  },
  {
    id: 2,
    name: "Diya Mehra",
    image: "images/profile2.jpg"
  },
  {
    id: 3,
    name: "Rohan Verma",
    image: "images/profile3.jpg"
  },
  ])


 


  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setusers={users}/>
    </div>
  )
}

export default App