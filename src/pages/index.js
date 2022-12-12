import React, { createContext, useState } from "react";
import Header from "../components/header/header";
import Main from "../components/main/main";
import "../scss/index.scss";

export const CurrentNav = createContext(null);

function App() {
  const [item, setItem] = useState("Home");
  return (
    <div className="App">
      <div className="container">
        <CurrentNav.Provider value={{ item, setItem }}>
          <Header />
          <Main />
        </CurrentNav.Provider>
      </div>
    </div>
  );
}

export default App;
