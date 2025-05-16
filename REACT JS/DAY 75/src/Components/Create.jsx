import React, { useState } from 'react'

const Create = () => {
  const [fullname, setfullname] = useState("")
  const [age, setage] = useState(18)
  
      const Submithandler = (e) => {
        e.preventDefault()
        console.log("Form submit");
        const newuser = {fullname , age}
        console.log(newuser);
        
      }
      
  return (
    <div>
         <h1>Register User</h1>
      <form onSubmit={Submithandler} action="">
        <input onChange={(e) => setfullname(e.target.value)} value={fullname} type="text" name="" id="" placeholder='Full name'/>
        <input  onChange={(e) => setage(e.target.value)} value={age} type="number" name="" id="" placeholder='Age' />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Create