import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <NavBar />      
      <Home />
      <Foot />
    </div>
  );
}
