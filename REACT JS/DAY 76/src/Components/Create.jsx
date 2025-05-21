import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";
const Create = (props) => {
  // let settodos = props.settodos;
  // let todos = props.todos;

const [todos, settodos] = useContext(todocontext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHnadler = (data) => {
    // e.preventDefault();
    // let newtodo = {
    //   id: nanoid(),
    //   // tittle: tittle,
    //   isCompleted: false,
    // };

    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);
    const copttodos = [...todos];
    copttodos.push(data);
    settodos(copttodos);
    toast.success("Todo Created")
    reset();

    // console.log(newtodo);
    // const copytodos = [...todos];
    // copytodos.push(newtodo)
    // settodos(copytodos)
    // console.log(todos);
    
  };

 
  useState;
  return (
    <div className=" w-[30vw] text-center border-r-[2px] p-5  ">
      <h1 className="text-4xl  text-start">
        Set <span className="text-red-400">Reminders</span> for tasks
      </h1>
      <form
        className="w-full mt-5"
        onSubmit={handleSubmit(submitHnadler)}
        action=""
      >
        <input
          {...register("title" , {required:"Tittle can not be empty"})}
          className="w-full  py-4 px-3 border-b-[2px] outline-none "
          type="text"
          placeholder="Enter a Tittle here"
        />
        {/* {errors && errors.title && errors.title.message ? <small className="text-start flex items-start text-red-500">{errors.title.message}</small> : ""} */}
        <small className="text-start flex items-start text-red-500">{errors?.title?.message}</small>
        <button
          className="text-start flex items-start mt-5 py-2 px-10 rounded-[8px] bg-blue-500 text-white"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
