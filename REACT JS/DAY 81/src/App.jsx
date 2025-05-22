import React from "react";
import MainRoute from "./routes/MainRoute";
import Nabvar from './components/Nabvar'

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white">
      <Nabvar />
    <div className="px-12">
        <MainRoute  />
    </div>
    </div>
  );
};

export default App;
