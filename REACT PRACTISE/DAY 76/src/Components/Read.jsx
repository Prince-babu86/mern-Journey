import React from 'react'

const Read = (props) => {

   let users = (props.users);

   let renderUsers = users.map((user , index)=>{
    return <div key={index}>
        <h4>{user.name}</h4>
        <img src={user.image} alt="" />
    </div>
   })
  
  return (
    <div>
        {renderUsers}
    </div>
  )
}

export default Read