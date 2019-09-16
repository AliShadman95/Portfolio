import React from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
