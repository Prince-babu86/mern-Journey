import React, { useState } from 'react'

const Create = (props) => {
console.log(props);

    const [fullname, setfullname] = useState("")
    const [phone, setphone] = useState("")
      let user = {fullname , phone}
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        setfullname("")
        setphone("")
        console.log(user);
    }
    
  return (
    <div>
        <h1>Register Your Account</h1>
        <form onSubmit={handleOnSubmit} action="">
            <input onChange={(e)=> setfullname(e.target.value)} value={fullname} type="text" placeholder='Enter your name' />
            <input onChange={(e)=> setphone(e.target.value)} value={phone} type="number" placeholder='Phone' />
            <button type='submit
            ' >Submit</button>
        </form>
    </div>
  )
}

export default Create