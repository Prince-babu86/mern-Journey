import React, { useState } from 'react'
import { nanoid } from "nanoid";
const Create = (props) => {
    let settodos = props.settodos
    let todos = props.todos
      const [tittle, settittle] = useState("");
      const submitHnadler = (e) => {
    e.preventDefault();
    let newtodo = {
      id: nanoid(),
      tittle: tittle,
      isCompleted: false,
    };
    // console.log(newtodo);
    // const copytodos = [...todos];
    // copytodos.push(newtodo)
    // settodos(copytodos)
    // console.log(todos);

    settodos([...todos, newtodo]);
    settittle("");
  };
  useState
  return (
    <div className=' w-[30vw] text-center border-r-[2px] p-5 sm:w-full border-none '>
         <h1 className='text-4xl  text-start'>Set <span className='text-red-400'>Reminders</span> for tasks</h1>
      <form className='w-full mt-5' onSubmit={submitHnadler} action="">
        <input className='w-full  py-4 px-3 border-b-[2px] outline-none ' required="Please Enter some task here"
          onChange={(e) => settittle(e.target.value)}
          value={tittle}
          type="text"
          placeholder="Enter a Tittle here"
        />
       

        <button className='text-start flex items-start mt-5 py-2 px-10 rounded-[8px] bg-blue-500 text-white' type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create