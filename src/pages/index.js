import React, { createContext, useState, useContext } from "react";
import Header from "../components/header/header";
import Main from "../components/main/main";
import "../scss/index.scss";

export const CurrentNav = createContext({ item: "Home", setItem: (e) => {} });

function App() {
  const [item, setItem] = useState("Home");

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
