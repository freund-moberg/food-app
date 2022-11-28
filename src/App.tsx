import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import Store from "./components/Store/Store";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Store></Store>
    </div>
  );
}

export default App;
