import React from "react";

const Read = (props) => {
    let todos = props.todos
  const renderTodos = todos.map((todo) => {
    return <li style={{color: todo.isCompleted ?  "tamato" : "green"}} key={todo.id}>{todo.tittle}</li>;
  });

  return (
    <>
      <h1 style={{color:"tomato"}}>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
