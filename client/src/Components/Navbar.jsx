import React from "react";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
      id="pb-navbar"
    >
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse justify-content-md-center collapse"
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link active"
              >
                <span>Home</span>
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <span>About</span>
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <span>Projects</span>
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <span>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
