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
    <>
         <h1>Create Tasks</h1>
      <form onSubmit={submitHnadler} action="">
        <input
          onChange={(e) => settittle(e.target.value)}
          value={tittle}
          type="text"
          placeholder="Tittle"
        />
        <br />
        <br />

        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default Create