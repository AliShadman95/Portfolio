import React, { Component } from "react";

class NavBar extends Component {
  state = { isHide: false };

  hideBar = () => {
    const { isHide } = this.state;

    window.scrollY > this.prev
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }
  render() {
    const classHide = this.state.isHide ? "hide" : "";
    return (
      <nav
        className={`navbar navbar-expand-lg site-navbar navbar-light bg-light ${classHide}`}
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
                <a className="nav-link active" href="#section-home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
