import React, { Component } from "react";
import { Element } from "react-scroll";

import BackToTop from "../node_modules/react-back-to-top-button/build/index";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import FLBanner from "./Components/FreelancerBanner";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

export default class App extends Component {
  render() {
    // We pass a hidden prop to Navbar which can render className="hidden" if the prop is true
    return (
      <div className="App">
        <BackToTop showAt={400} speed={1500} easing="easeInOutQuint">
          <svg
            style={{ fill: "#007bff" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z" />
          </svg>
        </BackToTop>
        <NavBar />
        <Element id="home" name="home">
          <Hero />
        </Element>
        <Element id="about" name="about">
          <AboutMe />
        </Element>
        <FLBanner />
        <Element id="projects" name="projects">
          <Projects />
        </Element>
        <Element id="contact" name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    );
  }
}
