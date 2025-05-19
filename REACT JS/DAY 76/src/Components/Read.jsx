import React from "react";
import { toast } from "react-toastify";
// import "./Read.css"

const Read = (props) => {
  let todos = props.todos;
  let settodos = props.settodos;

  const deleteHandler = (id) => {
    const filterdtodo = todos.filter((todo) => todo.id != id);
    console.log(filterdtodo);
    settodos(filterdtodo);
    toast.error("Todo Deleted")
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        className="flex items-center justify-between w-[50%] p-3 border-b-1 "
        // style={{ color: todo.isCompleted ? "tamato" : "green" }}
        key={todo.id}
      >
        {todo.title}
        <span
          onClick={() => deleteHandler(todo.id)}
          style={{ color: "red", cursor: "pointer" }}
        >
          Delete
        </span>
      </li>
    );
  });

  return (
    <div className="w-[70vw]  flex items-start p-5 flex-col ">
      <h1 className="text-4xl">
        Pending <span className="text-amber-400">Todos</span>
      </h1>
      <ol className="mt-5 w-[70%] sm:w-full">{renderTodos}</ol>
    </div>
  );
};

export default Read;
