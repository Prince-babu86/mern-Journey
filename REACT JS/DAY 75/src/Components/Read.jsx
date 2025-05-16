import React from 'react'

const Read = (props) => {

console.log(props.users);
const users = props.users
     const renderuser = users.map((elem , index)=>{
    return <li key={index}>name : {elem.name}</li>
  })

  

  return (
    <div>
          <h1>Users data</h1>
      <h4>{renderuser}</h4>
    </div>
  )
}

export default Read