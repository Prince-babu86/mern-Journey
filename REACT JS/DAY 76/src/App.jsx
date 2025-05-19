import Create from "./Components/Create";
import Read from "./Components/Read";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    // { id: 1, tittle: "Kam kar le bhai", isCompleted: false },
  ]);

 let dta = [...todos]
 console.log(dta);


  const [isCompleted, setisCompleted] = useState(false);

  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("Agra");

  return (
    <div className="w-screen h-screen  p-10 flex ">
      <Create settodos={settodos} todos={todos} />
      
      <Read todos={todos} settodos={settodos} />

      <div>
        {" "}
        {/* <input
          onChange={(e) => setisCompleted(e.target.checked)}
          checked={isCompleted}
          type="checkbox"
        />
        <br />
        <br />
        male
        <input value={"male"} type="radio" />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="Delhi">Delhi</option>
          <option value="Nodia">Nodia</option>
          <option value="Agra">Agra</option>
        </select> */}
      </div>
    </div>
  );
};

export default App;
