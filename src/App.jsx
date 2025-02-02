import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavCom.jsx";
import Home from "./componants/HomeComp.jsx";
import TicTac from "./componants/TicTacComp.jsx";
import CustomeHook from "./componants/CustomeHookComp.jsx";
import Counter from "./componants/UseReducerComp.jsx";
import UseEffect from "./componants/UseEffectComp.jsx";
import UseRef from "./componants/UseRefComp.jsx";
import UseContext from "./componants/CompA.jsx";

const UserContextComp = createContext();

function App() {
  const user = {
    name: "Sanket",
  };
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTac" element={<TicTac />} />
        <Route path="/CustomeHook" element={<CustomeHook />} />
        <Route path="/UseReducer" element={<Counter />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route
          path="/UseContext"
          element={
            <UserContextComp.Provider value={user}>
              <UseContext />
            </UserContextComp.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
export { UserContextComp };
