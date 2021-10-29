import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <NavBar />      
      <Home />
      <Foot />
    </div>
  );
}
