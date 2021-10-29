import React from "react";
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";  
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
