import { createContext, useState } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kam kar le bhai", isCompleted: false },
  ]);

  console.log(props.children);
  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
