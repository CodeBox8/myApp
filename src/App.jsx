import React, { createContext,Suspense  } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavCom";
import Home from "./componants/HomeComp";
import TicTac from "./componants/TicTacComp";
import CustomeHook from "./componants/CustomeHookComp";
import Counter from "./componants/UseReducerComp";
import UseEffect from "./componants/UseEffectComp";
import UseRef from "./componants/UseRefComp";
import UseMemoCom from "./componants/UseMemoCom";
import ErrorBoundary from "./utils/ErrorBoundary";
const UseContext = React.lazy(() => import('./componants/CompA'));


const NameContext = createContext();

function App() {
  const contextDataObj = {
    name: "Sanket",
  };
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loadinggggggggg...</div>}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTac" element={<TicTac />} />
        <Route path="/CustomeHook" element={<CustomeHook />} />
        <Route path="/UseReducer" element={<Counter />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/UseMemo" element={<UseMemoCom />} />
        <Route
          path="/UseContext"
          element={
            <ErrorBoundary>
              <NameContext.Provider value={contextDataObj}>
                <UseContext />
              </NameContext.Provider >
            </ErrorBoundary>
          }
        />
      </Routes>
      </Suspense>
    </Router>
  );
}


export default App;
export {NameContext};
