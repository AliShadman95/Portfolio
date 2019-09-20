import React from "react";
import pImage from "../Media/cutmypic.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const AboutMe = () => {
  return (
    <section className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <img
                src={pImage}
                alt="ImagePlaceholder"
                className="img-fluid my-image"
              />
            </ScrollAnimation>
          </div>

          <div className="col-lg-5 pl-lg-5">
            <div className="section-heading">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <h2>
                  About <strong>Me</strong>
                </h2>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
              <p className="lead">
                Hello! My name is Ali Shadman,<br></br>
                and I'm a Rome-based Freelancer
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
              <p className="mb-5  ">
                I primarly use <b>ASP.NET</b>, but picking up a new framework or
                language isn't a problem. I have a discrete programming
                experience and I'm confortable developing on the frontend or
                backend.
                <br></br> I have diverse set of skills,ranging from HTML + CSS +
                JS, to React, all the way to ASP.NET and SQL Server.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay="250" animateOnce>
              <p>
                <AwesomeButton type="primary">
                  <a href="#section-contact" className="btn px-4 py-2 btn-sm">
                    HIRE ME
                  </a>
                </AwesomeButton>
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row pt-5">
          <div className="section-heading col-md-3 mb-3 text-center">
            <ScrollAnimation animateIn="fadeInUp" offset="200" animateOnce>
              <h2>
                My <strong>Skills</strong>
              </h2>
            </ScrollAnimation>
          </div>
          <div className="col-md-9">
            <div className="skill">
              <ScrollAnimation animateIn="fadeInUp" delay="50" animateOnce>
                <h3>ASP.NET</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "94%" }}
                    aria-valuenow="94"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>94%</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="skill">
              <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
                <h3>HTML5</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="skill">
              <ScrollAnimation animateIn="fadeInUp" delay="150" animateOnce>
                <h3>CSS3</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "83%" }}
                    aria-valuenow="83"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>83%</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="skill">
              <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
                <h3>JS</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>90%</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="skill">
              <ScrollAnimation animateIn="fadeInUp" delay="250" animateOnce>
                <h3>Bootstrap</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "91%" }}
                    aria-valuenow="91"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>91%</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
