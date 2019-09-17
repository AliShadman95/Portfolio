import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    // We pass a hidden prop to Navbar which can render className="hidden" if the prop is true
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <AboutMe />
      </div>
    );
  }
}
