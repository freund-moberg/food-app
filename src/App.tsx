import React from "react";
import "./app.scss";
import MenuBar from "./components/menuBar/menuBar";
import Store from "./components/store/store";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Store></Store>
    </div>
  );
}

export default App;
