import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {


  const [users, setusers] = useState([
    {name:"Price babu" , age:18},
     {name:"Lucky savita" , age:17},
      {name:"Jacy sacker" , age:35},
  ])


 


  // const changeHandler = (e) => {
  //   setfullname(e.target.value)
  //   // console.log(e.target.value);
  // }

  // console.log(fullname);



  return (
    <div>
     
  <Create/>
  <hr />
  <Read users={users} setusers={setusers} />
    
    </div>
  )
}

export default App