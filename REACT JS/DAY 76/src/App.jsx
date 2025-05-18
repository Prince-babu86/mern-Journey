import Create from "./Components/Create";
import Read from "./Components/Read";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    // { id: 1, tittle: "Kam kar le bhai", isCompleted: false },
  ]);

  const [isCompleted, setisCompleted] = useState(false);

  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("Agra");


  const Fnc = (a,f,...rest) => {
    console.log(rest);

  }

  Fnc("Prince","javascript","newdata","jojo","jaja","kakakka")
  return (
    <>
      <Create settodos={settodos} todos={todos} />
      <br />
      <br />
      <Read todos={todos} />

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
    </>
  );
};

export default App;
